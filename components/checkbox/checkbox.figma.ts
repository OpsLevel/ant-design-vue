import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=253-5605', {
  props: {
    checked: figma.enum('Type', {
      checked: 'true',
    }),
    indeterminate: figma.enum('Type', {
      indeterminate: 'true',
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
    label: figma.string('Label'),
  },
  example: (props) =>
    html`<a-checkbox :checked="${props.checked}" :indeterminate="${props.indeterminate}" disabled="${props.disabled}">${props.label}</a-checkbox>`,
})
