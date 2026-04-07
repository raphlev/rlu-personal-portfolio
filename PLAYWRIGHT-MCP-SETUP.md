# Playwright MCP Server — Setup Guide

How to configure the Playwright MCP server for use with **Claude Code in the VS Code extension** and **Claude Code in the terminal (CLI)**.

---

## Prerequisites

Install the Playwright MCP package globally (once per machine):

```bash
npm install -g @playwright/mcp
```

Verify installation:

```bash
node -e "require('@playwright/mcp')" && echo "OK"
```

---

## Step 1 — Create a Playwright MCP config file (once per machine)

Create anywhere on disk, e.g. `C:\Users\<you>\playwright-mcp-config.json`:

```json
{
  "outputDir": "C:\\Users\\<you>\\playwright-mcp-output",
  "browser": {
    "type": "chrome",
    "userDataDir": "C:\\Users\\<you>\\AppData\\Local\\playwright-mcp-profile"
  }
}
```

| Field | Purpose |
|---|---|
| `outputDir` | Where screenshots and snapshots are saved — **outside the project**, so no git pollution |
| `userDataDir` | Persistent Chrome profile (retains logins between runs) |

> **Important:** `outputDir` only applies to auto-named outputs. If you pass an explicit `filename` to `browser_take_screenshot`, use the **full absolute path** (e.g., `C:\Users\<you>\playwright-mcp-output\my-shot.png`) — relative filenames resolve to the CWD (project root) instead of `outputDir`, which pollutes your working tree.

---

## Step 2 — Register the server with Claude Code CLI (once per machine)

Edit **`C:\Users\<you>\.claude\settings.json`** and add the `mcpServers` block:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "C:\\path\\to\\node.exe",
      "args": [
        "C:\\Users\\<you>\\AppData\\Roaming\\npm\\node_modules\\@playwright\\mcp\\cli.js",
        "--config",
        "C:\\Users\\<you>\\playwright-mcp-config.json"
      ]
    }
  }
}
```

Find your node path:

```cmd
where node
```

> **Why full path?** Claude Code spawns the MCP server process natively (not through a shell), so `node` without a full path is not resolved from PATH. Use the absolute path to `node.exe`.

This makes Playwright available in all **terminal Claude Code sessions** across all projects.

---

## Step 3 — Add `.mcp.json` to the project workspace (once per project)

The **VS Code extension** does not read `mcpServers` from `~/.claude/settings.json`. It only loads MCP servers declared in a `.mcp.json` file at the **project workspace root**.

Create **`<project_workspace>\.mcp.json`**:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "C:\\path\\to\\node.exe",
      "args": [
        "C:\\Users\\<you>\\AppData\\Roaming\\npm\\node_modules\\@playwright\\mcp\\cli.js",
        "--config",
        "C:\\Users\\<you>\\playwright-mcp-config.json"
      ]
    }
  }
}
```

Same content as Step 2 — the server definition is duplicated by design (CLI reads `settings.json`, VS Code extension reads `.mcp.json`).

---

## Step 4 — Approve the server in project local settings (once per project)

The VS Code extension prompts for trust when it finds a new `.mcp.json`. To pre-approve it without prompts, edit **`<project_workspace>\.claude\settings.local.json`**:

```json
{
  "permissions": {
    "allow": [
      "Bash(*)",
      "mcp__playwright"
    ],
    "deny": []
  },
  "enabledMcpjsonServers": ["playwright"],
  "enableAllProjectMcpServers": true
}
```

| Setting | Purpose |
|---|---|
| `mcp__playwright` in `allow` | Grants Claude Code permission to call Playwright tools without prompting |
| `enabledMcpjsonServers` | Approves the named server from `.mcp.json` |
| `enableAllProjectMcpServers` | Auto-trusts all servers declared in `.mcp.json` |

> `.claude/settings.local.json` is gitignored — it holds personal/machine-specific overrides and should not be committed.

---

## Step 5 — Reload VS Code

Press `Ctrl+Shift+P` → type `Developer: Reload Window` → Enter.

Then type `/mcp` in the Claude Code chat to confirm:

```
playwright  ● Connected
```

---

## Files at a glance

| File | Location | Scope | Purpose |
|---|---|---|---|
| `playwright-mcp-config.json` | Anywhere on disk | Machine (once) | Browser type, output dir, profile |
| `C:\Users\<you>\.claude\settings.json` | User home | Machine (once) | Registers server for CLI sessions |
| `<project_workspace>\.mcp.json` | Project root | Per project | Registers server for VS Code extension sessions |
| `<project_workspace>\.claude\settings.local.json` | Project root | Per project | Approves server, grants tool permissions |

---

## Replicating to a new project

Steps 1 and 2 are already done (machine-wide). For each new project:

1. Copy `.mcp.json` from this project to the new project root — update paths if needed.
2. Copy `.claude/settings.local.json` from this project to `<new_project>\.claude\settings.local.json`.
3. Reload VS Code.

---

## Troubleshooting

**Playwright not showing in `/mcp`**
- Confirm `.mcp.json` exists at the workspace root (not a subdirectory).
- Confirm `enabledMcpjsonServers` includes `"playwright"` in `.claude/settings.local.json`.
- Reload VS Code (`Developer: Reload Window`).

**Server shows as failed / error**
- Check the Claude Code extension log: `Output` panel → select `Claude VSCode` from the dropdown.
- Test the server manually: `echo '{}' | node <path-to-cli.js> --config <path-to-config.json>`

**Tools not available in chat after connecting**
- Confirm `mcp__playwright` is in the `allow` array in `.claude/settings.local.json`.
- Start a new chat session after connecting — existing sessions don't pick up newly connected servers.

**CLI works but VS Code extension does not**
- The CLI reads `~/.claude/settings.json`; the VS Code extension reads `.mcp.json`.
  Both files must exist and point to the same server for both contexts to work.
