import { FiUpload } from "react-icons/fi"

import { Container, SelectImage, Ingredients, IngredientsList } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { IngredientItem } from "../../../components/IngredientItem"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

export function NewDish() {
  return (
    <Container>
      <Header />

      <Form title="Novo prato">
        <SelectImage>
          <label>Imagem do Prato</label>
          <input type="file" id="imageDish" />
          <label htmlFor="imageDish">
            <FiUpload />
            Selecione Imagem
          </label>
        </SelectImage>
        <Input type="text" labelContent="Nome" placeholder="Ex.: Salada Ravanello"/>
        <Select labelContent="Categoria" id="category" />
        <Ingredients>
          <label htmlFor="">Ingredientes</label>
          <IngredientsList>
            <IngredientItem value="Pão naan" />
            <IngredientItem isNew placeholder="Adicionar"/>
          </IngredientsList>
        </Ingredients>
        <Input type="number" labelContent="Preço" placeholder="00,00" isNumber step="0.01" min="0.01"/>
        <Input type="text" labelContent="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
        <Button title="Salvar alterações" isbiggerfont></Button>
      </Form>

      <Footer />
    </Container>
  )
}