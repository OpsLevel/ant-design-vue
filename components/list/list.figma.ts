import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=595-9930', {
  props: {
    itemLayout: figma.enum('Layout', {
      horizontal: undefined,
      vertical: 'vertical',
    }),
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    bordered: figma.enum('Bordered', {
      true: true,
      false: undefined,
    }),
  },
  example: (props) =>
    html`<a-list item-layout="${props.itemLayout}" size="${props.size}" bordered="${props.bordered}" :data-source="[]" />`,
})
