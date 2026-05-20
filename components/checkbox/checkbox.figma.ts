import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=253-5605', {
  props: {
    checked: figma.enum('Type', {
      checked: true,
    }),
    indeterminate: figma.enum('Type', {
      indeterminate: true,
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
  },
  example: (props) =>
    html`<a-checkbox${props.checked ? ' :checked="true"' : ''}${props.indeterminate ? ' :indeterminate="true"' : ''}${props.disabled ? ' disabled' : ''}>Label</a-checkbox>`,
})
