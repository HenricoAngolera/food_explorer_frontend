import { AiOutlineRight } from "react-icons/ai";
import { PiPencilSimpleBold } from "react-icons/pi";

import { Container, Buttons, IconButton, Content } from "./styles";

import { Quantity } from "../Quantity";
import { Button } from "../Button";

import hearth from "../../assets/icons/hearth.svg";

export function CardData({ image, name, price, isbiggerfont, buttons }) {
  return(
    <Container>
      <IconButton>
        {buttons ? <img src={hearth} alt="" /> : <PiPencilSimpleBold/>}
      </IconButton>

      <Content>
        <img src={image} alt="" />
        <h3>{name} <AiOutlineRight/></h3>
        <span>R$ {price}</span>
        {buttons && 
          <Buttons>
            <Quantity number="01" />
            <Button title="incluir" isbiggerfont />
          </Buttons>
        }
      </Content>
      
    </Container>
  )
}