import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=729-2058', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    placement: figma.enum('Placement', {
      no: undefined,
      BottomLeft: 'bottomLeft',
      BottomRight: 'bottomRight',
      TopLeft: 'topLeft',
      TopRight: 'topRight',
    }),
  },
  example: (props) =>
    html`<a-cascader size="${props.size}" placement="${props.placement}" :options="[]" />`,
})
