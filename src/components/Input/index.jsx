import { Container, InputBox } from "./styles"

export function Input({ icon: Icon, id, isNumber, labelContent, ...rest }) {
  return (
    <Container>
      {labelContent && <label htmlFor={id} >{labelContent}</label>}
      <InputBox isNumber={isNumber}>
        {Icon && <Icon />}
        {isNumber && "R$"}<input id={id} {...rest} />
      </InputBox>
    </Container>
  )
} 