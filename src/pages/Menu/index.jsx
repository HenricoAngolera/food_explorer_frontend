import { CgSearch } from "react-icons/cg";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { MenuItem } from "../../components/MenuItem";

import { useAuth } from "../../hooks/auth";

export function Menu() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header isopened />

      <Content>
        <Input type="text" icon={CgSearch} placeholder="Busque por pratos ou ingredientes" />

        <MenuItem title="Sair" onClick={signOut} />
      </Content>

      <Footer />
    </Container>
  )
}