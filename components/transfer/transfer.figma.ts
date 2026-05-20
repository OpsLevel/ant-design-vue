import figma, { html } from '@figma/code-connect/html'

figma.connect('https://www.figma.com/design/o50GEVJJglLyQisSsOcd8q/Ant-Design-Vue-3?node-id=719-18843', {
  props: {
    oneWay: figma.enum('Two way', {
      true: undefined,
      false: true,
    }),
  },
  example: (props) =>
    html`<a-transfer :data-source="[]" :target-keys="[]" one-way="${props.oneWay}" />`,
})
