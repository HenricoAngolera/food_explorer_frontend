import { AiOutlineLeft } from "react-icons/ai"

import { Container } from "./styles";

export function BackButton({ issmall }) {
  return (
    <Container issmall={issmall}>
      <AiOutlineLeft />
      <p>
        voltar
      </p>
    </Container>
  )
}