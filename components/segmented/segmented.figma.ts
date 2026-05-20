import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=654-11311', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
  },
  example: (props) =>
    html`<a-segmented size="${props.size}" :options="['Option 1', 'Option 2', 'Option 3']" />`,
})
