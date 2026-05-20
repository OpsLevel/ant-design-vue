import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=312-125131', {
  props: {
    checked: figma.enum('Type', {
      checked: 'true',
    }),
    size: figma.enum('Size', {
      default: undefined,
      small: 'small',
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
    loading: figma.enum('State', {
      loading: true,
    }),
  },
  example: (props) =>
    html`<a-switch :checked="${props.checked}" size="${props.size}" disabled="${props.disabled}" loading="${props.loading}" />`,
})
