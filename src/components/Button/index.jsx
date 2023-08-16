import { Container } from './styles'

export function Button({ icon: Icon, title, value }) {
  return (
    <Container>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
