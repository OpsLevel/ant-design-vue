import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=177-5293', {
  props: {
    type: figma.enum('Type', {
      horizontal: undefined,
      vertical: 'vertical',
    }),
    dashed: figma.enum('Line', {
      dashed: true,
      solid: undefined,
    }),
    orientation: figma.enum('Orientation', {
      center: undefined,
      left: 'left',
      right: 'right',
      'n/a': undefined,
    }),
    plain: figma.enum('Plain', {
      true: true,
      false: undefined,
    }),
    text: figma.string('Text'),
  },
  example: (props) =>
    html`<a-divider type="${props.type}" dashed="${props.dashed}" orientation="${props.orientation}" plain="${props.plain}">${props.text}</a-divider>`,
})
