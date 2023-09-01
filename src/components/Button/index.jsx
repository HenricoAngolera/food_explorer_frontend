import { Container } from './styles'

export function Button({ icon: Icon, title, value, isbiggerfont, isclear, isdark }) {
  return (
    <Container isbiggerfont={isbiggerfont} isclear={isclear} className={isdark ? "dark" : ""}>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
