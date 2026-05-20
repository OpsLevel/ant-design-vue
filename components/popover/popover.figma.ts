import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=560-14331', {
  props: {
    placement: figma.enum('Placement', {
      'Top Left': 'topLeft',
      Top: 'top',
      'Top Right': 'topRight',
      'Left Top': 'leftTop',
      'Right Top': 'rightTop',
      Left: 'left',
      Right: 'right',
      'Right Bottom': 'rightBottom',
      'Left Bottom': 'leftBottom',
      'Bottom Left': 'bottomLeft',
      Bottom: 'bottom',
      'Bottom Right': 'bottomRight',
    }),
    title: figma.string('Title'),
    content: figma.string('Text'),
  },
  example: (props) =>
    html`<a-popover title="${props.title}" content="${props.content}" placement="${props.placement}"><a-button>Click</a-button></a-popover>`,
})
