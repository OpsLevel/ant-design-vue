import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=376-1974', {
  props: {
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
    }),
    placement: figma.enum('Placement', {
      bottom: 'bottom',
      left: 'left',
      right: undefined,
      top: 'top',
    }),
    title: figma.string('Title'),
  },
  example: (props) =>
    html`<a-drawer :open="true" size="${props.size}" placement="${props.placement}" title="${props.title}" />`,
})
