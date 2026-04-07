# Playwright MCP Server — Setup Guide

How to configure the Playwright MCP server for use with **Claude Code in the VS Code extension** and **Claude Code in the terminal (CLI)**.

---

## How Claude Code stores MCP configuration

Claude Code uses three separate files for MCP servers — understanding which does what avoids confusion:

| File | Edited by | Works in | Purpose |
|---|---|---|---|
| `C:\Users\<you>\.claude.json` | Claude Code automatically | CLI + VS Code | Internal state file. Per-project MCP servers added via `claude mcp add` or UI are stored here under `projects.<path>.mcpServers`. **Do not edit manually.** |
| `C:\Users\<you>\.claude\settings.json` | You (manually) | CLI only | Global configuration. `mcpServers` defined here are available in all terminal sessions but **not** picked up by the VS Code extension. |
| `<project_workspace>\.mcp.json` | You (manually) | VS Code extension | Project-level MCP servers. The VS Code extension reads this file; the CLI does not. Requires approval via `.claude\settings.local.json`. |

---

## Approach A — Interactive (simplest, works everywhere)

Run this once per project from the terminal inside the project folder:

```bash
claude mcp add playwright -- cmd /c npx @playwright/mcp@latest
```

Claude Code writes the server definition into `C:\Users\<you>\.claude.json` under the current project path. It works in both the CLI and the VS Code extension with no extra files.

To use a local config file instead of defaults:

```bash
claude mcp add playwright -- node "C:\Users\<you>\AppData\Roaming\npm\node_modules\@playwright\mcp\cli.js" --config "C:\Users\<you>\playwright-mcp-config.json"
```

Verify with `/mcp` in chat — should show `playwright ● Connected`.

---

## Approach B — Manual files (explicit, portable, replicable)

Use this when you want the configuration checked into the project or shared with a team.

### Step 1 — Create a Playwright MCP config file (once per machine)

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

> **Screenshot filenames:** `outputDir` applies to auto-named outputs only. If you pass an explicit `filename` to `browser_take_screenshot`, use a full absolute path (e.g. `C:\Users\<you>\playwright-mcp-output\shot.png`) — relative filenames resolve to the CWD (project root) and pollute the working tree.

---

### Step 2 — Register the server globally for CLI (once per machine)

Edit **`C:\Users\<you>\.claude\settings.json`**:

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

> **Why full path to node.exe?** Claude Code spawns MCP servers natively (not via a shell), so `node` alone is not resolved from PATH.

---

### Step 3 — Add `.mcp.json` to the project workspace (once per project)

The VS Code extension reads MCP servers from **`<project_workspace>\.mcp.json`** — it does not read from `settings.json`.

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

---

### Step 4 — Approve the server in project local settings (once per project)

Edit **`<project_workspace>\.claude\settings.local.json`**:

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
| `enabledMcpjsonServers` | Approves the named server from `.mcp.json` without a trust dialog |
| `enableAllProjectMcpServers` | Auto-trusts all servers declared in `.mcp.json` |

> `.claude/settings.local.json` is gitignored — it holds personal/machine-specific overrides and should not be committed.

---

### Step 5 — Reload VS Code

Press `Ctrl+Shift+P` → `Developer: Reload Window` → Enter.

Then type `/mcp` in the Claude Code chat to confirm:

```
playwright  ● Connected
```

---

## Files at a glance (Approach B)

| File | Location | Scope | Purpose |
|---|---|---|---|
| `playwright-mcp-config.json` | Anywhere on disk | Machine (once) | Browser type, output dir, profile |
| `C:\Users\<you>\.claude\settings.json` | User home | Machine (once) | Registers server for CLI sessions |
| `<project_workspace>\.mcp.json` | Project root | Per project | Registers server for VS Code extension |
| `<project_workspace>\.claude\settings.local.json` | Project root | Per project | Approves server, grants tool permissions |

---

## Replicating to a new project

**Approach A:** run `claude mcp add playwright ...` from the new project folder. Done.

**Approach B:** Steps 1 and 2 are already done (machine-wide). For each new project:

1. Copy `.mcp.json` to the new project root.
2. Copy `.claude/settings.local.json` to `<new_project>\.claude\settings.local.json`.
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
  Both files must exist for both contexts to work.

**VS Code works but CLI does not**
- The project entry in `C:\Users\<you>\.claude.json` may have `"mcpServers": {}`.
  Either use `claude mcp add` (Approach A) or add the server to `settings.json` (Approach B Step 2).
