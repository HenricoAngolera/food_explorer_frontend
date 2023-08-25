import { Container } from "./styles";

export function Select({ labelContent, id }) {
  return (
    <Container>
      <label htmlFor={id}>{labelContent}</label>
      <select id={id}>
        <option value="dish">Refeição</option>
        <option value="main course">Prato principal</option>
        <option value="drink">Bebida</option>
      </select>
    </Container>
  )
}