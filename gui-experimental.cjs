// Dracula Vivid: a colorful Dracula theme for the OpenCode desktop app.
// Dark mode uses the official Dracula palette, light mode the official Alucard palette
// (https://draculatheme.com/spec). Edit the palettes below; OpenCode reloads the plugin on save.

const { Plugin, Style, Theme } = require("@opencode/plugin/gui")

const THEME_ID = "dracula-vivid"

const dracula = {
  bg: "#282A36",
  fg: "#F8F8F2",
  selection: "#44475A",
  comment: "#6272A4",
  red: "#FF5555",
  orange: "#FFB86C",
  yellow: "#F1FA8C",
  green: "#50FA7B",
  purple: "#BD93F9",
  cyan: "#8BE9FD",
  pink: "#FF79C6",
  brightRed: "#FF6E6E",
  brightGreen: "#69FF94",
  brightYellow: "#FFFFA5",
  brightPurple: "#D6ACFF",
  brightPink: "#FF92DF",
  brightCyan: "#A4FFFF",
  bgLighter: "#424450",
  bgLight: "#343746",
  bgDark: "#21222C",
  bgDarker: "#191A21",
  // Background Darker taken one step further, for the sidebar behind the main area.
  bgDarkest: "#111217",
  // Foreground blended a quarter and a half of the way into Comment, for secondary text.
  muted: "#D2D6DE",
  faint: "#ADB5CB",
}

const alucard = {
  bg: "#FFFBEB",
  fg: "#1F1F1F",
  selection: "#CFCFDE",
  comment: "#6C664B",
  red: "#CB3A2A",
  orange: "#A34D14",
  yellow: "#846E15",
  green: "#14710A",
  purple: "#644AC9",
  cyan: "#036A96",
  pink: "#A3144D",
  brightRed: "#D74C3D",
  brightGreen: "#198D0C",
  brightYellow: "#9E841A",
  brightPurple: "#7862D0",
  brightPink: "#BF185A",
  brightCyan: "#047FB4",
  bgFloat: "#EFEDDC",
  bgLighter: "#ECE9DF",
  bgLight: "#DEDCCF",
  bgDark: "#CECCC0",
  bgDarker: "#BCBAB3",
  muted: "#454235",
  faint: "#6C664B",
}

const alpha = (hex, value) => hex + value

function palette(c) {
  return {
    neutral: c.bg,
    ink: c.fg,
    primary: c.purple,
    accent: c.pink,
    success: c.green,
    warning: c.orange,
    error: c.red,
    info: c.cyan,
    interactive: c.purple,
    diffAdd: c.green,
    diffDelete: c.red,
  }
}

// Tokens shared by the older UI, code highlighting and the terminal-style markdown colors.
function overrides(c) {
  return {
    "syntax-comment": c.comment,
    "syntax-keyword": c.pink,
    "syntax-string": c.yellow,
    "syntax-primitive": c.green,
    "syntax-property": c.green,
    "syntax-type": c.cyan,
    "syntax-constant": c.purple,
    "syntax-operator": c.pink,
    "syntax-variable": c.fg,
    "syntax-object": c.fg,
    "syntax-punctuation": c.fg,
    "syntax-regexp": c.red,
    "syntax-info": c.cyan,
    "syntax-success": c.green,
    "syntax-warning": c.orange,
    "syntax-critical": c.red,
    "syntax-diff-add": c.green,
    "syntax-diff-delete": c.red,
    "syntax-diff-unknown": c.orange,

    "markdown-text": c.fg,
    "markdown-heading": c.purple,
    "markdown-link": c.cyan,
    "markdown-link-text": c.pink,
    "markdown-code": c.green,
    "markdown-block-quote": c.yellow,
    "markdown-emph": c.yellow,
    "markdown-strong": c.orange,
    "markdown-horizontal-rule": c.comment,
    "markdown-list-item": c.cyan,
    "markdown-list-enumeration": c.cyan,
    "markdown-image": c.cyan,
    "markdown-image-text": c.pink,
    "markdown-code-block": c.fg,

    "icon-diff-modified-base": c.orange,
    "icon-agent-plan-base": c.pink,
    "icon-agent-build-base": c.purple,
    "icon-agent-ask-base": c.cyan,
    "icon-agent-docs-base": c.yellow,
  }
}

// Tokens shared by both modes of the newer UI.
function v2Common(c) {
  return {
    "v2-text-text-base": c.fg,
    "v2-text-text-muted": c.muted,
    "v2-text-text-faint": c.faint,
    "v2-text-text-accent": c.cyan,
    "v2-text-text-accent-hover": c.brightCyan,
    "v2-text-text-code-accent": c.pink,
    "v2-text-text-code-path": c.cyan,

    "v2-border-border-focus": c.purple,
    "v2-icon-icon-muted": c.comment,
    "v2-icon-icon-accent": c.pink,
    "v2-icon-icon-accent-hover": c.brightPink,

    "v2-state-fg-success": c.green,
    "v2-state-fg-warning": c.orange,
    "v2-state-fg-danger": c.red,
    "v2-state-fg-info": c.cyan,

    "v2-agent-plan-solid": c.pink,
    "v2-agent-build-solid": c.purple,
    "v2-agent-explore-solid": c.yellow,
    "v2-agent-review-solid": c.green,
    "v2-agent-writer-solid": c.cyan,
  }
}

const dark = {
  palette: palette(dracula),
  overrides: {
    ...overrides(dracula),
    "background-base": dracula.bgDarker,
    "background-weak": dracula.bgDark,
    "background-strong": dracula.bgDarker,
    "background-stronger": dracula.bgDark,
    "surface-base": dracula.bgDark,
    "surface-base-hover": dracula.bg,
    "surface-base-active": dracula.bg,
    "surface-raised-base": dracula.bgDark,
    "surface-raised-base-hover": dracula.bg,
    "surface-raised-base-active": dracula.bgLight,
    "surface-raised-stronger-non-alpha": dracula.bgDark,
    "surface-float-base": dracula.bgDarkest,
    "input-base": dracula.bgDarkest,
    "input-hover": dracula.bgDark,
  },
  v2Overrides: {
    ...v2Common(dracula),

    "v2-background-bg-deep": dracula.bgDarkest,
    "v2-background-bg-base": dracula.bgDarker,
    "v2-background-bg-layer-01": dracula.bgDark,
    "v2-background-bg-layer-02": dracula.bg,
    "v2-background-bg-layer-03": dracula.bgLight,
    "v2-background-bg-layer-04": dracula.bgLighter,
    "v2-background-bg-inverse": dracula.fg,
    "v2-background-bg-contrast": dracula.purple,
    "v2-background-bg-icon-button-contrast": dracula.pink,
    "v2-background-bg-accent": dracula.purple,
    "v2-background-bg-code-path": dracula.selection,

    "v2-text-text-inverse": dracula.bgDarker,
    "v2-text-text-contrast": dracula.bgDarker,

    "v2-border-border-muted": alpha(dracula.comment, "4D"),
    "v2-border-border-base": alpha(dracula.comment, "80"),
    "v2-border-border-strong": dracula.comment,
    "v2-border-border-inverse": dracula.fg,

    "v2-overlay-simple-overlay-hover": alpha(dracula.purple, "1A"),
    "v2-overlay-simple-overlay-pressed": alpha(dracula.purple, "33"),
    "v2-overlay-simple-overlay-scrim": alpha(dracula.bgDarkest, "B3"),

    "v2-icon-icon-base": dracula.muted,
    "v2-icon-icon-faint": dracula.comment,
    "v2-icon-icon-inverse": dracula.bgDarker,
    "v2-icon-icon-contrast": dracula.bgDarker,

    "v2-state-bg-success": alpha(dracula.green, "1A"),
    "v2-state-border-success": alpha(dracula.green, "59"),
    "v2-state-bg-warning": alpha(dracula.orange, "1A"),
    "v2-state-border-warning": alpha(dracula.orange, "59"),
    "v2-state-bg-danger": alpha(dracula.red, "1A"),
    "v2-state-border-danger": alpha(dracula.red, "59"),
    "v2-state-bg-info": alpha(dracula.cyan, "1A"),
    "v2-state-border-info": alpha(dracula.cyan, "59"),

    "v2-agent-plan-border": alpha(dracula.pink, "33"),
    "v2-agent-plan-background": alpha(dracula.pink, "0D"),
    "v2-agent-build-border": alpha(dracula.purple, "33"),
    "v2-agent-build-background": alpha(dracula.purple, "0D"),
    "v2-agent-explore-border": alpha(dracula.yellow, "33"),
    "v2-agent-explore-background": alpha(dracula.yellow, "0D"),

    "v2-avatar-bg-orange": alpha(dracula.orange, "4D"),
    "v2-avatar-border-orange": dracula.orange,
    "v2-avatar-bg-yellow": alpha(dracula.yellow, "4D"),
    "v2-avatar-border-yellow": dracula.yellow,
    "v2-avatar-bg-cyan": alpha(dracula.cyan, "4D"),
    "v2-avatar-border-cyan": dracula.cyan,
    "v2-avatar-bg-green": alpha(dracula.green, "4D"),
    "v2-avatar-border-green": dracula.green,
    "v2-avatar-bg-red": alpha(dracula.red, "4D"),
    "v2-avatar-border-red": dracula.red,
    "v2-avatar-bg-pink": alpha(dracula.pink, "4D"),
    "v2-avatar-border-pink": dracula.pink,
    "v2-avatar-bg-blue": alpha(dracula.comment, "80"),
    "v2-avatar-border-blue": dracula.comment,
    "v2-avatar-bg-purple": alpha(dracula.purple, "4D"),
    "v2-avatar-border-purple": dracula.purple,
    "v2-avatar-bg-gray": dracula.selection,
    "v2-avatar-border-gray": dracula.comment,
  },
}

const light = {
  palette: palette(alucard),
  overrides: {
    ...overrides(alucard),
    "background-base": alucard.bg,
    "background-weak": alucard.bgLighter,
    "background-strong": alucard.bg,
    "background-stronger": alucard.bgLighter,
    "surface-raised-stronger-non-alpha": alucard.bgFloat,
    "input-base": alucard.bg,
  },
  v2Overrides: {
    ...v2Common(alucard),

    "v2-background-bg-base": alucard.bg,
    "v2-background-bg-deep": alucard.bgFloat,
    "v2-background-bg-layer-01": alucard.bgLighter,
    "v2-background-bg-layer-02": alucard.bgLight,
    "v2-background-bg-layer-03": alucard.bgDark,
    "v2-background-bg-layer-04": alucard.bgDarker,
    "v2-background-bg-inverse": alucard.fg,
    "v2-background-bg-contrast": alucard.purple,
    "v2-background-bg-icon-button-contrast": alucard.pink,
    "v2-background-bg-button-neutral": alucard.bg,
    "v2-background-bg-accent": alucard.purple,
    "v2-background-bg-code-path": alucard.selection,

    "v2-text-text-inverse": alucard.bg,
    "v2-text-text-contrast": alucard.bg,

    "v2-border-border-muted": alpha(alucard.comment, "26"),
    "v2-border-border-base": alpha(alucard.comment, "40"),
    "v2-border-border-strong": alpha(alucard.comment, "80"),
    "v2-border-border-inverse": alucard.fg,

    "v2-overlay-simple-overlay-hover": alpha(alucard.purple, "12"),
    "v2-overlay-simple-overlay-pressed": alpha(alucard.purple, "24"),
    "v2-overlay-simple-overlay-scrim": alpha(alucard.fg, "66"),

    "v2-icon-icon-base": alucard.muted,
    "v2-icon-icon-faint": alpha(alucard.comment, "99"),
    "v2-icon-icon-inverse": alucard.bg,
    "v2-icon-icon-contrast": alucard.bg,

    "v2-state-bg-success": alpha(alucard.green, "14"),
    "v2-state-border-success": alpha(alucard.green, "4D"),
    "v2-state-bg-warning": alpha(alucard.orange, "14"),
    "v2-state-border-warning": alpha(alucard.orange, "4D"),
    "v2-state-bg-danger": alpha(alucard.red, "14"),
    "v2-state-border-danger": alpha(alucard.red, "4D"),
    "v2-state-bg-info": alpha(alucard.cyan, "14"),
    "v2-state-border-info": alpha(alucard.cyan, "4D"),

    "v2-agent-plan-border": alpha(alucard.pink, "33"),
    "v2-agent-plan-background": alpha(alucard.pink, "0D"),
    "v2-agent-build-border": alpha(alucard.purple, "33"),
    "v2-agent-build-background": alpha(alucard.purple, "0D"),
    "v2-agent-explore-border": alpha(alucard.yellow, "33"),
    "v2-agent-explore-background": alpha(alucard.yellow, "0D"),

    "v2-avatar-bg-orange": alucard.orange,
    "v2-avatar-border-orange": alucard.yellow,
    "v2-avatar-bg-yellow": alucard.yellow,
    "v2-avatar-border-yellow": alucard.brightYellow,
    "v2-avatar-bg-cyan": alucard.cyan,
    "v2-avatar-border-cyan": alucard.brightCyan,
    "v2-avatar-bg-green": alucard.green,
    "v2-avatar-border-green": alucard.brightGreen,
    "v2-avatar-bg-red": alucard.red,
    "v2-avatar-border-red": alucard.brightRed,
    "v2-avatar-bg-pink": alucard.pink,
    "v2-avatar-border-pink": alucard.brightPink,
    "v2-avatar-bg-blue": alucard.cyan,
    "v2-avatar-border-blue": alucard.brightCyan,
    "v2-avatar-bg-purple": alucard.purple,
    "v2-avatar-border-purple": alucard.brightPurple,
    "v2-avatar-bg-gray": alucard.comment,
    "v2-avatar-border-gray": alucard.bgDarker,
  },
}

const theme = {
  $schema: "https://opencode.ai/desktop-theme.json",
  name: "Dracula Vivid",
  id: THEME_ID,
  light,
  dark,
}

// The app paints chat markdown with plain text colors, so this colors it per the Dracula spec.
// The selectors only match while this theme is the one selected.
function styleVars(c) {
  return `
    --dv-heading: ${c.purple};
    --dv-strong: ${c.orange};
    --dv-emph: ${c.yellow};
    --dv-code: ${c.green};
    --dv-link: ${c.pink};
    --dv-link-hover: ${c.brightPink};
    --dv-marker: ${c.cyan};
    --dv-quote: ${c.yellow};
    --dv-rule: ${c.comment};
    --dv-selection: ${c.selection};`
}

function css(pluginID) {
  const root = `:root[data-theme="${pluginID}:${THEME_ID}"]`
  const md = `${root} [data-component=markdown]`

  return `
${root}[data-color-scheme=dark] {${styleVars(dracula)}
}
${root}[data-color-scheme=light] {${styleVars(alucard)}
}
${root} ::selection { background: var(--dv-selection); }
${md} :is(h1, h2, h3, h4, h5, h6) { color: var(--dv-heading); }
${md} :is(strong, b) { color: var(--dv-strong); }
${md} :is(em, i) { color: var(--dv-emph); }
${md} :not(pre) > code:not([data-inline-code-kind=path]):not(a > code) {
  color: var(--dv-code);
  background: color-mix(in srgb, var(--dv-code) 10%, transparent);
}
${md} a { color: var(--dv-link); }
${md} a:hover { color: var(--dv-link-hover); }
${md} li::marker { color: var(--dv-marker); }
${md} blockquote {
  color: var(--dv-quote);
  font-style: italic;
  border-inline-start: 2px solid var(--dv-quote);
  padding-inline-start: 0.75rem;
}
${md} hr { border-top: 1px solid var(--dv-rule); }
${md} th { color: var(--dv-heading); }
`
}

module.exports = {
  theme,
  default: Plugin.define({
    setup(ctx) {
      ctx.add(Theme, theme)
      ctx.add(Style, css(ctx.id))
    },
  }),
}
