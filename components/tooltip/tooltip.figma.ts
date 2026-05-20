import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=110-836', {
  props: {
    placement: figma.enum('Placement', {
      TL: 'topLeft',
      Top: 'top',
      TR: 'topRight',
      LT: 'leftTop',
      RT: 'rightTop',
      Left: 'left',
      Right: 'right',
      RB: 'rightBottom',
      LB: 'leftBottom',
      BL: 'bottomLeft',
      Bottom: 'bottom',
      BR: 'bottomRight',
    }),
    title: figma.string('Text'),
  },
  example: (props) =>
    html`<a-tooltip title="${props.title}" placement="${props.placement}"><a-button>Hover</a-button></a-tooltip>`,
})
