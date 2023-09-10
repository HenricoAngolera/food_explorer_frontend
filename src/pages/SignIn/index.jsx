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
        <h2>Faça Login</h2>
        <Input id="email" border labelContent="Email" lesspace placeholder="Exemplo: exemplo@exemplo.com.br"/>
        <Input id="password" border type="password" labelContent="Senha" lesspace placeholder="No mínimo 6 caracteres" min="6"/>
        <Button title="Entrar" isbiggerfont/>
        <TextButton to="/register" title="Criar conta" />
      </ContentBox>
    </Container>
  )
}