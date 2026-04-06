import { useState, useEffect } from 'react';

// Module-level singleton: only one fetch per page session regardless of how
// many components call usePortfolio().
let _cache = null;
let _promise = null;

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

/**
 * Parse lines of text into a block object with:
 *   kv        — **key:** value pairs
 *   paragraphs — plain text paragraphs
 *   bullets    — `- item` list entries
 */
function parseLines(text, block) {
  const lines = text.split('\n');
  let buf = [];

  for (const line of lines) {
    const t = line.trim();

    // blank line or horizontal rule → flush paragraph buffer
    if (!t || t === '---') {
      if (buf.length) { block.paragraphs.push(buf.join(' ')); buf = []; }
      continue;
    }

    // bullet list item
    if (t.startsWith('- ') || t.startsWith('* ')) {
      if (buf.length) { block.paragraphs.push(buf.join(' ')); buf = []; }
      block.bullets.push(t.slice(2));
      continue;
    }

    // **key:** value
    const kv = t.match(/^\*\*([^*]+):\*\*\s*(.*)/);
    if (kv) {
      if (buf.length) { block.paragraphs.push(buf.join(' ')); buf = []; }
      block.kv[kv[1].trim()] = kv[2].trim();
      continue;
    }

    // markdown headings (already consumed by section/subsection splitting)
    if (t.startsWith('#')) continue;

    // regular prose
    buf.push(t);
  }

  if (buf.length) block.paragraphs.push(buf.join(' '));
}

/**
 * Given the body of a `## section`, extract:
 *   kv, paragraphs, bullets — from the top-level content
 *   subsections             — keyed by `### name`
 *   json                    — parsed from a ```json block, if present
 */
function extractBlock(text) {
  const block = { kv: {}, paragraphs: [], bullets: [], subsections: {}, json: null };

  // Extract and remove any ```json ... ``` block first
  const jsonRe = /```json\n([\s\S]*?)\n```/;
  const jsonMatch = text.match(jsonRe);
  if (jsonMatch) {
    try {
      block.json = JSON.parse(jsonMatch[1]);
    } catch (e) {
      console.warn('portfolio.md: JSON parse error', e);
    }
    text = text.replace(jsonMatch[0], '');
  }

  // Locate all ### subsection headers
  const subRe = /^### (.+)$/gm;
  const indices = [];
  let m;
  while ((m = subRe.exec(text)) !== null) {
    indices.push({ name: m[1].trim(), pos: m.index, end: m.index + m[0].length });
  }

  // Parse the content that precedes the first ### (the "main" block)
  const mainEnd = indices.length ? indices[0].pos : text.length;
  parseLines(text.slice(0, mainEnd), block);

  // Parse each ### subsection
  for (let i = 0; i < indices.length; i++) {
    const start = indices[i].end;
    const end = i + 1 < indices.length ? indices[i + 1].pos : text.length;
    const sub = { kv: {}, paragraphs: [], bullets: [] };
    parseLines(text.slice(start, end), sub);
    block.subsections[indices[i].name] = sub;
  }

  return block;
}

/**
 * Parse the full portfolio.md text into a map of section name → block.
 * Sections are delimited by `## name` headers.
 */
function parse(text) {
  const data = {};
  // Split on `\n## ` to get each section (the first chunk is the file header — ignored)
  const parts = text.split(/\n## /);
  for (const part of parts) {
    if (!part.trim()) continue;
    const nl = part.indexOf('\n');
    if (nl === -1) continue;
    const name = part.slice(0, nl).trim().toLowerCase();
    const body = part.slice(nl + 1);
    data[name] = extractBlock(body);
  }
  return data;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Returns the parsed portfolio data, or null while loading.
 * All components share the same fetch — the file is requested once per page session.
 *
 * Usage:
 *   const portfolio = usePortfolio();
 *   const { kv, paragraphs, bullets, subsections, json } = portfolio?.intro ?? {};
 */
export function usePortfolio() {
  const [data, setData] = useState(_cache);

  useEffect(() => {
    if (_cache) return;

    if (!_promise) {
      _promise = fetch('/portfolio.md')
        .then(r => {
          if (!r.ok) throw new Error(`Failed to load portfolio.md: ${r.status}`);
          return r.text();
        })
        .then(text => { _cache = parse(text); return _cache; })
        .catch(err => {
          console.error(err);
          _promise = null; // allow retry on next mount
          return null;
        });
    }

    let mounted = true;
    _promise.then(d => { if (mounted && d) setData(d); });
    return () => { mounted = false; };
  }, []);

  return data;
}
