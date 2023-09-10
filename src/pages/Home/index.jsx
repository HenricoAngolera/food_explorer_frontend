import { Link } from "react-router-dom"

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { CardData } from '../../components/CardData'

import macarrons from '../../assets/images/marrons.png'
import sla from '../../assets/images/salada.png'

import { Container, Scroll, Content, HomeMessage, Text, Sections, Cards } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <Scroll>
        <Content>
          <HomeMessage>
            <img src={macarrons} alt="" />
            <Text>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Text>
          </HomeMessage>
          <Sections>
            <Section title="Refeições">
              <Cards>
                <Link to="/details/5">
                  <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                </Link>
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
              </Cards>
            </Section>
            <Section title="Pratos principais">
              <Cards>
                <Link to="/details/5">
                  <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                </Link>
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
              </Cards>
            </Section>
            <Section title="Bebidas">
              <Cards>
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
                <CardData image={sla} name="Salada Ravenello" price="49,00" isbiggerfont buttons />
              </Cards>
            </Section>
          </Sections>
        </Content>

        <Footer />
      </Scroll>
    </Container>
  )
}
