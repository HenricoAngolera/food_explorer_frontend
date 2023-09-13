import Salada from '../../../assets/images/salada.png'

import { Container, Scroll, Content, Tags, Flex, Main, Desktop } from './styles'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { BackButton } from '../../../components/BackButton'
import { IngredientTag } from '../../../components/IngredientTag'
import { Button } from '../../../components/Button'

export function DetailsAdmin() {
  return (
    <Container>
      <Header admin />

      <Scroll>
        <Content>
          <BackButton />
          <Main>
            <img src={Salada} alt="" />

            <Desktop>
              <h1>Salada Ravenello</h1>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              </p>

              <Tags>
                <IngredientTag title="alface" />
                <IngredientTag title="cebola" />
                <IngredientTag title="pão naan" />
                <IngredientTag title="pepino" />
                <IngredientTag title="rabanete" />
                <IngredientTag title="tomate" />
              </Tags>

              <Flex>
                <Button title="Editar prato" isbiggerfont />
              </Flex>

            </Desktop>
          </Main>
        </Content>

        <Footer />
      </Scroll>
    </Container>
  )
}
