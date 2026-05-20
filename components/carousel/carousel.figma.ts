import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=663-15836', {
  props: {
    dotPosition: figma.enum('Position', {
      bottom: undefined,
      top: 'top',
      left: 'left',
      right: 'right',
    }),
  },
  example: (props) =>
    html`<a-carousel dot-position="${props.dotPosition}"><div>Slide 1</div><div>Slide 2</div></a-carousel>`,
})
