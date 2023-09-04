import { PiReceipt } from 'react-icons/pi'

import Salada from '../../assets/images/salada.png'

import { Container, Scroll, Content, Tags, Main, Flex } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { IngredientTag } from '../../components/IngredientTag'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header />

      <Scroll>
        <Content>
          <BackButton />
          <Main>
            <img src={Salada} alt="" />

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
              <Quantity number="01" isDetails />

              <Button icon={PiReceipt} title=" pedir" value="25,00" />
            </Flex>
          </Main>
        </Content>

        <Footer />
      </Scroll>
    </Container>
  )
}
