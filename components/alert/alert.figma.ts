import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=372-25500', {
  props: {
    type: figma.enum('State', {
      error: 'error',
      info: 'info',
      success: 'success',
      warning: 'warning',
    }),
    banner: figma.enum('banner', {
      true: true,
      false: undefined,
    }),
    showIcon: figma.boolean('Alert Icon'),
    closable: figma.boolean('Close'),
  },
  example: (props) =>
    html`<a-alert type="${props.type}" message="Alert message" show-icon="${props.showIcon}" banner="${props.banner}" closable="${props.closable}" />`,
})
