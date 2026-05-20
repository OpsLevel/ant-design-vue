import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=636-52710', {
  props: {
    multiple: figma.enum('Type', {
      basic: undefined,
      multiple: true,
    }),
  },
  example: (props) =>
    html`<a-tree multiple="${props.multiple}" :tree-data="[{ title: 'Node', key: '0' }]" />`,
})
