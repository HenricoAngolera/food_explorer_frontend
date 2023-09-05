import { Container, ContentBox } from "./styles";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
  return (
    <Container>
      <Logo isbiggersize/>

      <ContentBox>
        <Input id="email" labelContent="Email" lesspace placeholder="Exemplo: exemplo@exemplo.com.br"/>
        <Input id="password" labelContent="Senha" lesspace placeholder="No mínimo 6 caracteres" min="6"/>
        <Button title="Entrar" isbiggerfont/>
        <TextButton title="Criar conta" />
      </ContentBox>
    </Container>
  )
}