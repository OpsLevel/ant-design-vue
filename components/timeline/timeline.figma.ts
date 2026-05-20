import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=644-5148', {
  props: {
    mode: figma.enum('Position', {
      left: undefined,
      alternate: 'alternate',
      right: 'right',
    }),
  },
  example: (props) =>
    html`<a-timeline mode="${props.mode}"><a-timeline-item>Event 1</a-timeline-item><a-timeline-item>Event 2</a-timeline-item></a-timeline>`,
})
