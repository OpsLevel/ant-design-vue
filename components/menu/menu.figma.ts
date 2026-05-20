import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=483-2002', {
  props: {
    mode: figma.enum('Mode', {
      horizontal: 'horizontal',
      vertical: 'vertical',
    }),
    theme: figma.enum('Theme', {
      light: undefined,
      dark: 'dark',
    }),
    inlineCollapsed: figma.enum('Collaped', {
      false: undefined,
      true: true,
    }),
  },
  example: (props) =>
    html`<a-menu mode="${props.mode}" theme="${props.theme}" inline-collapsed="${props.inlineCollapsed}"><a-menu-item key="1">Item</a-menu-item></a-menu>`,
})
