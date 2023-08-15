import diamond from "../../assets/bluediamond.svg";
import { Container, Text } from "./styles";

export function Logo() {
  return(
    <Container>
      <img src={diamond} alt="" />
      <Text>food explorer</Text>
    </Container>
  )
}