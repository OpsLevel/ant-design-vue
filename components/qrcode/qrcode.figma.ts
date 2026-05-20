import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=558-59', {
  props: {
    status: figma.enum('Status', {
      active: undefined,
      expired: 'expired',
      loading: 'loading',
      scanned: 'scanned',
    }),
  },
  example: (props) =>
    html`<a-qrcode value="https://example.com" status="${props.status}" />`,
})
