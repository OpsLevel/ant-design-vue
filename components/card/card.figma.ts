import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=365-4421', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      small: 'small',
    }),
    bordered: figma.enum('Bordered', {
      true: undefined,
      false: 'false',
    }),
  },
  example: (props) =>
    html`<a-card title="Card Title" size="${props.size}" :bordered="${props.bordered}">Card content</a-card>`,
})
