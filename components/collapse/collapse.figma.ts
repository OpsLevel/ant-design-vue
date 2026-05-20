import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=659-10364', {
  props: {
    ghost: figma.enum('Borderless', {
      ghost: true,
      true: undefined,
      false: undefined,
    }),
    bordered: figma.enum('Borderless', {
      true: 'false',
      false: undefined,
      ghost: undefined,
    }),
  },
  example: (props) =>
    html`<a-collapse :bordered="${props.bordered}" ghost="${props.ghost}"><a-collapse-panel header="Panel Header">Content</a-collapse-panel></a-collapse>`,
})
