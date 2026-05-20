# Figma Code Connect — Design Spec

**Date:** 2026-05-20
**Figma file:** https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3

## Goal

Connect ant-design-vue component definitions to the team's Figma workspace using Figma Code Connect. When a teammate inspects a component in Figma Dev Mode, they see the correct `ant-design-vue` usage snippet with accurate prop values automatically — no per-person setup required.

## Scope

Pilot of 5 components to validate the workflow before expanding to the full library:

| Component | Key props mapped |
|-----------|-----------------|
| `Button` | type, size, danger, disabled, loading, shape |
| `Input` | size, disabled, status |
| `Checkbox` | checked, disabled, indeterminate |
| `Switch` | checked, disabled, size |
| `Tag` | color, closable |

## Architecture

### File layout

```
package.json                        ← @figma/code-connect added as devDependency
figma.config.json                   ← project-root config

components/
  button/
    button.tsx                      (existing)
    button.figma.ts                 ← Code Connect definition
  input/
    input.figma.ts
  checkbox/
    checkbox.figma.ts
  switch/
    switch.figma.ts
  tag/
    tag.figma.ts
```

Co-located placement was chosen over a centralized `figma/` directory so Code Connect files live alongside the component source they describe, making prop updates visible in the same PR as the code change.

### figma.config.json

```json
{
  "codeConnect": {
    "include": ["components/**/*.figma.ts"]
  }
}
```

### Code Connect file structure

Each `*.figma.ts` file:

1. Imports the Vue component from its local `index.ts`
2. Calls `figma.connect()` with the Figma node URL, a `props` map, and an `example` render function

**Prop mapping helpers used:**

- `figma.enum('VariantName', {...})` — Figma variant → TypeScript union value
- `figma.boolean('VariantName')` — Figma boolean property → Vue boolean prop
- `figma.string('VariantName')` — Figma text property → Vue string prop
- `figma.children(...)` — Figma layers → Vue slot content

**Example (Button):**

```ts
import figma from '@figma/code-connect'
import Button from './button'

figma.connect(Button, 'FIGMA_NODE_URL', {
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
  // exact `example` syntax to be confirmed against installed @figma/code-connect version
  example: (props) => { /* Vue template string or render function */ },
})
```

> **Note:** Figma node URLs for each component must be retrieved from the Figma file before implementation. Click a component in Figma and copy the URL including `?node-id=...`.

## Publish Workflow

### One-time publish (owner)

```bash
npm install --save-dev @figma/code-connect
FIGMA_ACCESS_TOKEN=<token> npx figma connect publish
```

A Figma Personal Access Token is generated at Figma → Settings → Security.

### npm script (optional convenience)

```json
"scripts": {
  "figma:publish": "figma connect publish"
}
```

### Re-publishing after changes

Update the relevant `*.figma.ts` file and re-run `figma connect publish`. No npm package release needed — definitions are stored in Figma's cloud.

### Team experience

Zero per-person setup. Once published, any teammate with access to the Figma file sees the code snippet in Dev Mode automatically.

## Out of Scope

- CI/CD auto-publish on merge (future iteration)
- Connecting `vc-*` internal components (no Figma counterparts)
- Full-library expansion beyond the 5-component pilot
- Codegen from prop type files
