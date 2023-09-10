import { Link } from "react-router-dom";

import { VscChromeClose } from "react-icons/vsc";
import { PiReceipt } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { Container, Menu, ButtonBox, Requests } from "./styles";

import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ isopened, admin }) {
  return (
    <Container isopened={isopened}>
      <Menu>
        {isopened ? <Link to="/"> <VscChromeClose /> </Link> : <Link to={admin ? "/menu_admin" : "/menu"}> <IoMenu /> </Link>}
      </Menu>

      {isopened && <h1>Menu</h1>}
      {!isopened && <Logo admin={admin ? "admin" : ""} />}

      <Input placeholder="Busque por pratos ou ingredientes" icon={CgSearch} iconSpace ></Input>
      
      <ButtonBox>
        <Button icon={PiReceipt} title="Pedidos (0)" isbiggerfont></Button>
      </ButtonBox>

      <a href="">
        <FiLogOut />
      </a>

      {!isopened && 
      <Requests>
        {!admin && <PiReceipt />}
      </Requests>}
    </Container>
  )
}