import { useState } from "react";
import { FiUpload } from "react-icons/fi"

import { Container, Scroll, LineOne, SelectImage, LineTwo, Ingredients, IngredientsList, TextAreaWrapper, ButtonsBox } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { IngredientItem } from "../../../components/IngredientItem"
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

import { api } from "../../../services/api";

export function NewDish() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleAddIngredients () {
    setIngredients(prevState => [...prevState, newIngredient]) 
    setNewIngredient("")
  }

  async function registerItem(e) {
    e.preventDefault();
    await api.post("/dishes", {
      image,
      category,
      name,
      price,
      ingredients: [ingredient],
      description
    })

    alert("Cadastrou!")
  }

  return (
    <Container>
      <Header admin />

      <Scroll>
        <Form title="Novo prato">
          <LineOne>
            <SelectImage>
              <label>Imagem do Prato</label>
              <input type="file" id="imageDish" onChange={e => setImage(e.target.value)} />
              <label htmlFor="imageDish">
                <FiUpload />
                Selecione Imagem
              </label>
            </SelectImage>
            <Input type="text" labelContent="Nome" isdark placeholder="Ex.: Salada Ravanello" onChange={e => setName(e.target.value)}/>
            <Select labelContent="Categoria" id="category" onChange={e => setCategory(e.target.value)} />
          </LineOne>
          <LineTwo>
            <Ingredients>
              <label htmlFor="">Ingredientes</label>
              <IngredientsList>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem key={String(index)} value={ingredient} onClick={() => {}}/>
                  )
                  )
                }
                <IngredientItem isNew placeholder="Adicionar" value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredients}/>
              </IngredientsList>
            </Ingredients>
            <Input type="number" labelContent="Preço" placeholder="00,00" isNumber isdark step="0.01" min="0.01" onChange={e => setPrice(e.target.value)}/>
          </LineTwo>
          <TextAreaWrapper>
            <label htmlFor="">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)}/>
          </TextAreaWrapper>
          <ButtonsBox>
            <Button title="Salvar alterações" isbiggerfont isclear onClick={(e) => registerItem(e)}></Button>
          </ButtonsBox>
        </Form>

        <Footer />
      </Scroll>
    </Container>
  )
}