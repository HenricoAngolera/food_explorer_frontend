import { PiReceipt } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

import { Logo } from "../Logo";
import { Container, Menu, Requests } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <IoMenu />
      </Menu>

      <Logo />

      <Requests>
        <PiReceipt />
      </Requests>
    </Container>
  )
}