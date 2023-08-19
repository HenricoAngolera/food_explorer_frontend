import { Container } from './styles'

export function Button({ icon: Icon, title, value, isBiggerFont }) {
  return (
    <Container isBiggerFont={isBiggerFont}>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
