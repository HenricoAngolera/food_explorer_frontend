import { Container, InputBox } from "./styles"

export function Input({ icon: Icon, id, isNumber, labelContent, isdark, lesspace, ...rest }) {
  return (
    <Container lesspace={lesspace}>
      {labelContent && <label htmlFor={id} >{labelContent}</label>}
      <InputBox isNumber={isNumber} isdark={isdark}>
        {Icon && <Icon />}
        {isNumber && "R$"}<input id={id} {...rest} />
      </InputBox>
    </Container>
  )
} 