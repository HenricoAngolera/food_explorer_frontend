import { Container } from "./styles";

import { BackButton } from "../BackButton";

export function Form({ title, children }) {
  return (
    <Container>
      <BackButton issmall/>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}