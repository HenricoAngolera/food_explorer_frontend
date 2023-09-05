import diamond from "../../assets/icons/bluediamond.svg";
import { Container } from "./styles";

export function Logo({ admin, isbiggersize }) {
  return(
    <Container isbiggersize={isbiggersize}>
      <img src={diamond} alt="" />
      <p>food explorer</p>
      {admin ? <p className="admin">admin</p> : ""}
    </Container>
  )
}