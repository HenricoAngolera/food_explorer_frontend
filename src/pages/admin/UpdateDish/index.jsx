import { useState, useEffect } from "react";

import { FiUpload } from "react-icons/fi"

import { Container, Scroll, SelectImage, LineOne, Ingredients, LineTwo, IngredientsList, TextAreaWrapper, ButtonsBox } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { IngredientItem } from "../../../components/IngredientItem"
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

export function UpdateDish() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let buttonText = 'Selecione Imagem para alterá-la';
  if (windowWidth > 1024) {
    buttonText = 'Selecione Imagem';
  }

  return (
    <Container>
      <Header admin />

      <Scroll>
        <Form title="Editar prato">
          <LineOne>
            <SelectImage>
              <label>Imagem do Prato</label>
              <input type="file" id="imageDish" />
              <label htmlFor="imageDish">
                <FiUpload />
                {buttonText}
              </label>
            </SelectImage>
            <Input type="text" value="Salada Reveno" labelContent="Nome" isdark />
            <Select labelContent="Categoria" id="category" />
          </LineOne>
          <LineTwo>
            <Ingredients>
              <label htmlFor="">Ingredientes</label>
              <IngredientsList>
                <IngredientItem value="Pão naan" />
                <IngredientItem isNew placeholder="Adicionar"/>
              </IngredientsList>
            </Ingredients>
            <Input type="number" labelContent="Preço" value="40.00" isNumber isdark step="0.01" min="0.01"/>
          </LineTwo>
          <TextAreaWrapper>
            <label htmlFor="">Descrição</label>
            <TextArea content="A Salada César é uma opção refrescante para o verão."/>
          </TextAreaWrapper>
          <ButtonsBox>
            <Button isdark title="Excluir prato" isbiggerfont />
            <Button title="Salvar alterações" isbiggerfont isclear></Button>
          </ButtonsBox>
        </Form>

        <Footer />
      </Scroll>
    </Container>
  )
}