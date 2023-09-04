import { VscChromeClose } from "react-icons/vsc";
import { PiReceipt } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

import { Logo } from "../Logo";
import { Container, Menu, Requests } from "./styles";

export function Header({ isopened, admin }) {
  return (
    <Container isopened={isopened}>
      <Menu>
        {isopened ? <VscChromeClose /> : <IoMenu />}
      </Menu>

      {isopened && <h1>Menu</h1>}
      {!isopened && <Logo admin={admin ? "admin" : ""} />}

      {!isopened && 
      <Requests>
        {!admin && <PiReceipt />}
      </Requests>}
    </Container>
  )
}