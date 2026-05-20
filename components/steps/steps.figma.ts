import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=214-13067', {
  props: {
    type: figma.enum('Type', {
      icon: undefined,
      dot: undefined,
      navigation: 'navigation',
      inline: 'inline',
      'Custom Icon': undefined,
    }),
    progressDot: figma.enum('Type', {
      dot: true,
      icon: undefined,
      navigation: undefined,
      inline: undefined,
      'Custom Icon': undefined,
    }),
    size: figma.enum('Size', {
      default: undefined,
      small: 'small',
    }),
    direction: figma.enum('Orientation', {
      horizontal: undefined,
      vertical: 'vertical',
    }),
  },
  example: (props) =>
    html`<a-steps type="${props.type}" progress-dot="${props.progressDot}" size="${props.size}" direction="${props.direction}"><a-step title="Step 1" /><a-step title="Step 2" /></a-steps>`,
})
