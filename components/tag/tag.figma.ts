import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=404-34901', {
  props: {
    color: figma.enum('Present', {
      default: undefined,
      success: 'success',
      error: 'error',
      warning: 'warning',
      processing: 'processing',
      magenta: 'magenta',
      red: 'red',
      volcano: 'volcano',
      orange: 'orange',
      gold: 'gold',
      lime: 'lime',
      green: 'green',
      cyan: 'cyan',
      blue: 'blue',
      geekblue: 'geekblue',
      purple: 'purple',
    }),
    bordered: figma.enum('Border', {
      true: undefined,
      false: 'false',
    }),
    closable: figma.boolean('Closeable'),
    value: figma.string('Value'),
  },
  example: (props) =>
    html`<a-tag color="${props.color}" :bordered="${props.bordered}" closable="${props.closable}">${props.value}</a-tag>`,
})
