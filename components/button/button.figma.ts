import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=144-5014', {
  props: {
    type: figma.enum('Type', {
      dashed: 'dashed',
      default: undefined,
      iconLink: undefined,
      link: 'link',
      primary: 'primary',
      text: 'text',
    }),
    size: figma.enum('Size', {
      small: 'small',
      middle: undefined,
      large: 'large',
    }),
    danger: figma.enum('Danger', {
      true: true,
      false: undefined,
    }),
    ghost: figma.enum('Ghost', {
      true: true,
      false: undefined,
    }),
    disabled: figma.enum('State', {
      disabled: true,
    }),
    loading: figma.enum('State', {
      loading: true,
    }),
    label: figma.string('Text'),
  },
  example: (props) =>
    html`<a-button type="${props.type}" size="${props.size}" danger="${props.danger}" ghost="${props.ghost}" disabled="${props.disabled}" loading="${props.loading}">${props.label}</a-button>`,
})
