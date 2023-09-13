import diamond from "../../assets/icons/bluediamond.svg";
import { Container, Column } from "./styles";

export function Logo({ admin, isbiggersize }) {
  return(
    <Container isbiggersize={isbiggersize} admin={admin}>
      <img src={diamond} alt="" />
      <Column>
        <p>food explorer</p>
        {admin ? <p className="admin">admin</p> : ""}
      </Column>
    </Container>
  )
}