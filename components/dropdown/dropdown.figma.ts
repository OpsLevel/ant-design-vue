import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=465-3412', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
    placement: figma.enum('Placement', {
      bottomLeft: 'bottomLeft',
      bottomCenter: 'bottomCenter',
      bottomRight: 'bottomRight',
      topLeft: 'topLeft',
      topCenter: 'topCenter',
      topRight: 'topRight',
      bottom: undefined,
    }),
  },
  example: (props) =>
    html`<a-dropdown disabled="${props.disabled}" placement="${props.placement}">
  <a-button>Hover me</a-button>
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=486-8345', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-dropdown disabled="${props.disabled}">
  <a-button>Hover me</a-button>
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=488-13133', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
    type: figma.enum('Type', {
      default: undefined,
      primary: 'primary',
    }),
  },
  example: (props) =>
    html`<a-dropdown-button type="${props.type}" disabled="${props.disabled}">
  Button Text
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown-button>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=491-15048', {
  props: {
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-dropdown disabled="${props.disabled}">
  <a-button>Click me</a-button>
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown>`,
})
