import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=678-70957', {
  props: {
    mode: figma.enum('Mode', {
      month: undefined,
      year: 'year',
    }),
    fullscreen: figma.enum('Type', {
      full: undefined,
      card: 'false',
    }),
  },
  example: (props) =>
    html`<a-calendar mode="${props.mode}" :fullscreen="${props.fullscreen}" />`,
})
