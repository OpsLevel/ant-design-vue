import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=341-134195', {
  props: {
    type: figma.enum('Type', {
      line: undefined,
      card: 'card',
    }),
    size: figma.enum('Size', {
      default: undefined,
      large: 'large',
      small: 'small',
    }),
    tabPosition: figma.enum('Position', {
      top: undefined,
      bottom: 'bottom',
      left: 'left',
      right: 'right',
    }),
  },
  example: (props) =>
    html`<a-tabs type="${props.type}" size="${props.size}" tab-position="${props.tabPosition}"><a-tab-pane key="1" tab="Tab 1">Content 1</a-tab-pane></a-tabs>`,
})
