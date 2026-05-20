import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=513-6238', {
  props: {
    type: figma.enum('Type', {
      default: undefined,
      primary: 'primary',
    }),
    shape: figma.enum('Shape', {
      circle: undefined,
      square: 'square',
    }),
    description: figma.string('Description'),
  },
  example: (props) =>
    html`<a-float-button type="${props.type}" shape="${props.shape}" description="${props.description}" />`,
})
