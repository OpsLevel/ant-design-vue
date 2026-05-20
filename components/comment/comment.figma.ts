import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=658-5913', {
  example: (props) =>
    html`<a-comment author="Author" content="Comment content" />`,
})
