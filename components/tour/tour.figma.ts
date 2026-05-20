import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=637-56520', {
  props: {
    type: figma.enum('Type', {
      default: undefined,
      primary: 'primary',
    }),
  },
  example: (props) =>
    html`<a-tour type="${props.type}" :open="true" :steps="[{ title: 'Title', description: 'Description' }]" />`,
})
