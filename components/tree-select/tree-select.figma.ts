import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=708-93023', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
  },
  example: (props) =>
    html`<a-tree-select size="${props.size}" placeholder="Select" :tree-data="[{ title: 'Node', value: 'node', key: 'node' }]" />`,
})
