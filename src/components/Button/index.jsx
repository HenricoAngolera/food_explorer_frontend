import { Container } from './styles'

export function Button({ icon: Icon, title, value, isbiggerfont }) {
  return (
    <Container isbiggerfont={isbiggerfont}>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
