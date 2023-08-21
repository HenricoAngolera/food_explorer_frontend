import { CgSearch } from "react-icons/cg";

import { Container, Content } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { MenuItem } from "../../../components/MenuItem";

export function MenuAdmin() {
  return (
    <Container>
      <Header isopened />

      <Content>
        <Input type="text" icon={CgSearch} placeholder="Busque por pratos ou ingredientes" />

        <div>
          <MenuItem title="Novo Prato" />
          <MenuItem title="Sair" />
        </div>
      </Content>

      <Footer />
    </Container>
  )
}