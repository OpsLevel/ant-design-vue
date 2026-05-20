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
  },
  example: (props) =>
    html`<a-button${props.type ? ` type="${props.type}"` : ''}${props.size ? ` size="${props.size}"` : ''}${props.danger ? ' danger' : ''}${props.ghost ? ' ghost' : ''}${props.disabled ? ' disabled' : ''}${props.loading ? ' loading' : ''}>Button</a-button>`,
})
