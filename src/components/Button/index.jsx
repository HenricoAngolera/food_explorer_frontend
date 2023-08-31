import { Container } from './styles'

export function Button({ icon: Icon, title, value, isbiggerfont, isclear }) {
  return (
    <Container isbiggerfont={isbiggerfont} isclear={isclear}>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
