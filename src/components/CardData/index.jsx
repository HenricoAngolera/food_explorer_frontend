import { PiPencilSimpleBold } from "react-icons/pi";

import { Container, Buttons, IconButton, Content } from "./styles";

import { Quantity } from "../Quantity";
import { Button } from "../Button";

import hearth from "../../assets/icons/hearth.svg";

export function CardData({ image, name, price, isbiggerfont, buttons }) {
  return(
    <Container>
      <IconButton to={buttons ? "/details/5" : "/update"}>
        {buttons ? <img src={hearth} alt="" /> : <PiPencilSimpleBold/>}
      </IconButton>

      <Content>
        <img src={image} alt="" />
        <h3>{name} &gt;</h3>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
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