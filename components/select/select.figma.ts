import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=268-2874', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
  },
  example: (props) =>
    html`<a-select size="${props.size}" placeholder="Select" :options="[{ value: 'option1', label: 'Option 1' }]" />`,
})
