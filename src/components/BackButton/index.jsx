import { AiOutlineLeft } from "react-icons/ai"

import { Container, Text } from "./styles";

export function BackButton() {
  return (
    <Container>
      <AiOutlineLeft />
      <Text>
        voltar
      </Text>
    </Container>
  )
}