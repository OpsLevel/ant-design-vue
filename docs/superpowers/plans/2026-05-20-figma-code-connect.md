# Figma Code Connect — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Connect 5 ant-design-vue pilot components (Button, Input, Checkbox, Switch, Tag) to the team Figma workspace so teammates see correct code snippets in Figma Dev Mode without any per-person setup.

**Architecture:** Co-located `*.figma.ts` files live next to each component's source file. A root-level `figma.config.json` tells the `@figma/code-connect` CLI where to find them. After running `figma connect publish` once, all definitions are stored in Figma's cloud and available to the whole team.

**Tech Stack:** `@figma/code-connect` CLI, TypeScript, Vue 3, Figma Dev Mode

**Figma file:** https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3

---

### Task 1: Install tooling and create base config

**Files:**
- Modify: `package.json`
- Create: `figma.config.json`

- [ ] **Step 1: Install @figma/code-connect**

```bash
npm install --save-dev @figma/code-connect
```

Expected: `@figma/code-connect` appears in `devDependencies` in `package.json`.

- [ ] **Step 2: Add publish script to package.json**

In `package.json`, add to the `"scripts"` section:

```json
"figma:publish": "figma connect publish"
```

- [ ] **Step 3: Create figma.config.json at the project root**

```json
{
  "codeConnect": {
    "include": ["components/**/*.figma.ts"]
  }
}
```

- [ ] **Step 4: Verify the CLI is available**

```bash
npx figma connect --version
```

Expected: prints a version string, e.g. `2.x.x`. If the command is not found, re-run `npm install`.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json figma.config.json
git commit -m "chore: install @figma/code-connect and add base config"
```

---

### Task 2: Retrieve Figma node URLs and property names

> This task is manual — it requires opening the Figma file and inspecting each component. The URLs and property names collected here are used verbatim in Tasks 3–7.

- [ ] **Step 1: Set your Figma Personal Access Token as an env var**

Generate a token at Figma → Settings → Security → Personal access tokens.

```bash
export FIGMA_ACCESS_TOKEN=your_token_here
```

Add this to your shell profile (`.zshrc` / `.bashrc`) so it persists across sessions.

- [ ] **Step 2: Open the Figma file**

Navigate to: https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3

- [ ] **Step 3: Collect node URLs for each component**

For each component:
1. Find the **main component** (not an instance) in the Figma layers panel — main components have a filled diamond icon.
2. Click it, then copy the URL from the browser address bar (it will include `?node-id=XXX-YYY`).

Record these:
- `BUTTON_URL` → full URL with `?node-id=` for the Button component
- `INPUT_URL` → full URL for the Input component
- `CHECKBOX_URL` → full URL for the Checkbox component
- `SWITCH_URL` → full URL for the Switch component
- `TAG_URL` → full URL for the Tag component

- [ ] **Step 4: Inspect each component's Figma properties**

In Figma Dev Mode (shortcut: `Shift+D`), click each component and note the **exact names** of its properties in the right panel. These names must be reproduced verbatim in the `figma.enum()` and `figma.boolean()` calls.

Record the property names for each component — you'll replace the placeholder names (e.g. `'Type'`, `'Size'`, `'Disabled'`) in Tasks 3–7 if they differ.

---

### Task 3: Button Code Connect

**Files:**
- Create: `components/button/button.figma.ts`

- [ ] **Step 1: Create components/button/button.figma.ts**

Replace `BUTTON_URL` with the URL from Task 2. Replace any property name strings (e.g. `'Type'`, `'Size'`, `'Danger'`, `'Disabled'`, `'Loading'`) with the exact names you recorded in Figma.

```ts
import figma from '@figma/code-connect'
import AButton from './button'

figma.connect(AButton, 'BUTTON_URL', {
  props: {
    type: figma.enum('Type', {
      Primary: 'primary',
      Default: 'default',
      Dashed: 'dashed',
      Text: 'text',
      Link: 'link',
    }),
    size: figma.enum('Size', {
      Large: 'large',
      Default: undefined,
      Small: 'small',
    }),
    danger: figma.boolean('Danger'),
    disabled: figma.boolean('Disabled'),
    loading: figma.boolean('Loading'),
  },
  example: ({ type, size, danger, disabled, loading }) =>
    `<a-button` +
    (type ? ` type="${type}"` : '') +
    (size ? ` size="${size}"` : '') +
    (danger ? ' danger' : '') +
    (disabled ? ' disabled' : '') +
    (loading ? ' :loading="true"' : '') +
    `>Button</a-button>`,
})
```

- [ ] **Step 2: Validate the connection**

```bash
npx figma connect validate
```

Expected output:
```
✓ components/button/button.figma.ts
```

If you see `Property 'Type' not found on component`, it means that Figma property name does not exist on the component — open Figma Dev Mode, check the exact property names, and update the first argument to `figma.enum()` / `figma.boolean()` accordingly.

- [ ] **Step 3: Commit**

```bash
git add components/button/button.figma.ts
git commit -m "feat: add Figma Code Connect for Button"
```

---

### Task 4: Input Code Connect

**Files:**
- Create: `components/input/input.figma.ts`

- [ ] **Step 1: Create components/input/input.figma.ts**

Replace `INPUT_URL` and adjust Figma property name strings to match exactly.

```ts
import figma from '@figma/code-connect'
import AInput from './Input'

figma.connect(AInput, 'INPUT_URL', {
  props: {
    size: figma.enum('Size', {
      Large: 'large',
      Default: undefined,
      Small: 'small',
    }),
    disabled: figma.boolean('Disabled'),
    status: figma.enum('Status', {
      Default: undefined,
      Error: 'error',
      Warning: 'warning',
    }),
  },
  example: ({ size, disabled, status }) =>
    `<a-input` +
    (size ? ` size="${size}"` : '') +
    (disabled ? ' disabled' : '') +
    (status ? ` status="${status}"` : '') +
    ` placeholder="Placeholder" />`,
})
```

- [ ] **Step 2: Validate**

```bash
npx figma connect validate
```

Expected: both `button.figma.ts` and `input.figma.ts` show as valid.

- [ ] **Step 3: Commit**

```bash
git add components/input/input.figma.ts
git commit -m "feat: add Figma Code Connect for Input"
```

---

### Task 5: Checkbox Code Connect

**Files:**
- Create: `components/checkbox/checkbox.figma.ts`

- [ ] **Step 1: Create components/checkbox/checkbox.figma.ts**

Replace `CHECKBOX_URL` and adjust Figma property name strings to match exactly.

```ts
import figma from '@figma/code-connect'
import ACheckbox from './Checkbox'

figma.connect(ACheckbox, 'CHECKBOX_URL', {
  props: {
    checked: figma.boolean('Checked'),
    disabled: figma.boolean('Disabled'),
    indeterminate: figma.boolean('Indeterminate'),
  },
  example: ({ checked, disabled, indeterminate }) =>
    `<a-checkbox` +
    (checked ? ' :checked="true"' : '') +
    (disabled ? ' disabled' : '') +
    (indeterminate ? ' :indeterminate="true"' : '') +
    `>Label</a-checkbox>`,
})
```

- [ ] **Step 2: Validate**

```bash
npx figma connect validate
```

Expected: all 3 files validate successfully.

- [ ] **Step 3: Commit**

```bash
git add components/checkbox/checkbox.figma.ts
git commit -m "feat: add Figma Code Connect for Checkbox"
```

---

### Task 6: Switch Code Connect

**Files:**
- Create: `components/switch/switch.figma.ts`

- [ ] **Step 1: Create components/switch/switch.figma.ts**

Replace `SWITCH_URL` and adjust Figma property name strings to match exactly.

```ts
import figma from '@figma/code-connect'
import ASwitch from './index'

figma.connect(ASwitch, 'SWITCH_URL', {
  props: {
    checked: figma.boolean('Checked'),
    disabled: figma.boolean('Disabled'),
    size: figma.enum('Size', {
      Default: undefined,
      Small: 'small',
    }),
    loading: figma.boolean('Loading'),
  },
  example: ({ checked, disabled, size, loading }) =>
    `<a-switch` +
    (checked ? ' :checked="true"' : '') +
    (disabled ? ' disabled' : '') +
    (size ? ` size="${size}"` : '') +
    (loading ? ' :loading="true"' : '') +
    ` />`,
})
```

- [ ] **Step 2: Validate**

```bash
npx figma connect validate
```

Expected: all 4 files validate successfully.

- [ ] **Step 3: Commit**

```bash
git add components/switch/switch.figma.ts
git commit -m "feat: add Figma Code Connect for Switch"
```

---

### Task 7: Tag Code Connect

**Files:**
- Create: `components/tag/tag.figma.ts`

- [ ] **Step 1: Create components/tag/tag.figma.ts**

Replace `TAG_URL` and adjust Figma property name strings to match exactly. The Tag component uses `figma.string('Color')` since color in Figma is a free-text or token value, not a fixed enum.

```ts
import figma from '@figma/code-connect'
import ATag from './index'

figma.connect(ATag, 'TAG_URL', {
  props: {
    color: figma.string('Color'),
    closable: figma.boolean('Closable'),
    bordered: figma.boolean('Bordered'),
  },
  example: ({ color, closable, bordered }) =>
    `<a-tag` +
    (color ? ` color="${color}"` : '') +
    (closable ? ' closable' : '') +
    (bordered === false ? ' :bordered="false"' : '') +
    `>Tag</a-tag>`,
})
```

- [ ] **Step 2: Validate all 5 connections**

```bash
npx figma connect validate
```

Expected — all 5 files valid:
```
✓ components/button/button.figma.ts
✓ components/checkbox/checkbox.figma.ts
✓ components/input/input.figma.ts
✓ components/switch/switch.figma.ts
✓ components/tag/tag.figma.ts
```

- [ ] **Step 3: Commit**

```bash
git add components/tag/tag.figma.ts
git commit -m "feat: add Figma Code Connect for Tag"
```

---

### Task 8: Publish and verify in Dev Mode

- [ ] **Step 1: Publish all connections to Figma**

```bash
npm run figma:publish
```

Or with the token inline if your shell session lost it:

```bash
FIGMA_ACCESS_TOKEN=your_token npx figma connect publish
```

Expected: the CLI prints a success message for each of the 5 components published.

- [ ] **Step 2: Verify in Figma Dev Mode**

1. Open the Figma file: https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3
2. Switch to Dev Mode (`Shift+D` or via the toolbar icon)
3. Click on one of the connected components — e.g., the Button main component
4. Look for the "Code" section in the right panel — it should show a `<a-button>` snippet reflecting the component's current variant

If no snippet appears, wait 1–2 minutes for Figma to index the published connections, then refresh the page.

- [ ] **Step 3: Share the workflow with the team**

Teammates need no setup — the snippets are available to anyone with access to the Figma file. To republish after future prop changes:

```bash
# update the relevant *.figma.ts file, then:
npm run figma:publish
```
