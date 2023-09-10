import { AiOutlineLeft } from "react-icons/ai"

import { Container } from "./styles";

export function BackButton({ issmall, ...rest }) {
  return (
    <Container issmall={issmall} {...rest}>
      <AiOutlineLeft />
      <p>
        voltar
      </p>
    </Container>
  )
}