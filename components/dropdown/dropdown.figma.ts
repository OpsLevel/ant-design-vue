import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=465-3412', {
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

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=486-8345', {
  props: {
    disabled: figma.enum('state', {
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
    placement: figma.enum('Placement', {
      bottomLeft: 'bottomLeft',
      bottom: undefined,
      bottomRight: 'bottomRight',
      topLeft: 'topLeft',
      top: 'top',
      topRight: 'topRight',
    }),
  },
  example: (props) =>
    html`<a-dropdown placement="${props.placement}">
  <a-button>Hover me</a-button>
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown>`,
})

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=491-15048', {
  props: {
    placement: figma.enum('Placement', {
      bottom: undefined,
      bottomLeft: 'bottomLeft',
      bottomRight: 'bottomRight',
      top: 'top',
      topLeft: 'topLeft',
      topRight: 'topRight',
      no: undefined,
    }),
  },
  example: (props) =>
    html`<a-dropdown placement="${props.placement}">
  <a-button>Click me</a-button>
  <template #overlay>
    <a-menu :items="[{ key: '1', label: 'Item 1' }, { key: '2', label: 'Item 2' }]" />
  </template>
</a-dropdown>`,
})
