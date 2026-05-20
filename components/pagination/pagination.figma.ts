import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=388-6033', {
  props: {
    simple: figma.enum('Size', {
      simple: true,
      small: undefined,
      default: undefined,
    }),
    size: figma.enum('Size', {
      simple: undefined,
      small: 'small',
      default: undefined,
    }),
    showQuickJumper: figma.boolean('Jumper'),
    showSizeChanger: figma.boolean('Show Options'),
  },
  example: (props) =>
    html`<a-pagination :total="100" simple="${props.simple}" size="${props.size}" show-quick-jumper="${props.showQuickJumper}" show-size-changer="${props.showSizeChanger}" />`,
})
