import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=637-56520', {
  props: {
    type: figma.enum('Type', {
      default: undefined,
      primary: 'primary',
    }),
    placement: figma.enum('Placement', {
      topLeft: 'topLeft',
      top: undefined,
      topRight: 'topRight',
      leftTop: 'leftTop',
      left: 'left',
      leftBottom: 'leftBottom',
      rightTop: 'rightTop',
      right: 'right',
      rightBottom: 'rightBottom',
      bottomLeft: 'bottomLeft',
      bottom: 'bottom',
      bottomRight: 'bottomRight',
    }),
  },
  example: (props) =>
    html`<a-tour :open="true" :steps="[{ title: 'Title', description: 'Description', type: '${props.type}', placement: '${props.placement}' }]" />`,
})
