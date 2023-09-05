import { Container, ContentBox } from "./styles";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";


export function SignUp(){
  return (
    <Container>
      <Logo isbiggersize/>

      <ContentBox>
        <Input id="name" labelContent="Seu nome" lesspace placeholder="Exemplo: Maria da Silva"/>
        <Input id="email" labelContent="Email" lesspace placeholder="Exemplo: exemplo@exemplo.com.br"/>
        <Input id="password" labelContent="Senha" lesspace placeholder="No mínimo 6 caracteres" min="6"/>
        <Button title="Criar conta" isbiggerfont/>
        <TextButton title="Já tenho uma conta" />
      </ContentBox>
    </Container>
  )
}