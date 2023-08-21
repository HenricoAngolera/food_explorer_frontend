import { Container, InputBox } from "./styles"

export function Input({ icon: Icon, labelContent, ...rest }) {
  return (
    <Container>
      {labelContent && <label htmlFor="" >{labelContent}</label>}
      <InputBox>
        {Icon && <Icon />}
        <input {...rest} />
      </InputBox>
    </Container>
  )
} 