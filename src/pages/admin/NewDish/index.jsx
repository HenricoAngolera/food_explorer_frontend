import { Container } from "./styles";

import { Header } from "../../../components/Header"
import { Form } from "../../../components/Form"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

export function NewDish() {
  return (
    <Container>
      <Header />

      <Form title="Novo prato">
        <Input type="file" labelContent="Imagem do Prato"/>
        <Input type="text" labelContent="Nome" placeholder="Ex.: Salada Ravanello"/>
        <Input type="text" labelContent="Categoria" placeholder="Refeição"/>
        <Input type="text" labelContent="Ingredientes" placeholder="Pão naan"/>
        <Input type="number" labelContent="Preço" placeholder="R$ 00,00"/>
        <Input type="text" labelContent="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
        <Button title="Salvar alterações" isBiggerFont></Button>
      </Form>

      <Footer />
    </Container>
  )
}