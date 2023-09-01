import diamond from "../../assets/icons/bluediamond.svg";
import { Container, Text } from "./styles";

export function Logo({ admin }) {
  return(
    <Container>
      <img src={diamond} alt="" />
      <Text>food explorer</Text>
      {admin ? <p className="admin">admin</p> : ""}
    </Container>
  )
}