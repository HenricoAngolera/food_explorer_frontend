import { PiReceipt } from 'react-icons/pi'

import Salada from '../../../assets/images/salada.png'

import { Container, Content, Tags, Main } from './styles'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { BackButton } from '../../../components/BackButton'
import { IngredientTag } from '../../../components/IngredientTag'
import { Button } from '../../../components/Button'

export function DetailsAdmin() {
  return (
    <Container>
      <Header />

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

          <Button title="Editar prato" isbiggerfont />
        </Main>
      </Content>

      <Footer />
    </Container>
  )
}
