import { useState, useEffect } from 'react';

import { PiReceipt } from 'react-icons/pi'

import Salada from '../../assets/images/salada.png'

import { Container, Scroll, Content, Tags, Main, Desktop, Flex } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BackButton } from '../../components/BackButton'
import { IngredientTag } from '../../components/IngredientTag'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

export function Details() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let titleText = 'pedir';
  if (windowWidth > 1024) {
    titleText = 'incluir';
  }

  return (
    <Container>
      <Header />

      <Scroll>
        <Content>
          <BackButton to="/"/>
          <Main>
            <img src={Salada} alt="" />

            <Desktop>
              <h1>Salada Ravenello</h1>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
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

                <Button icon={PiReceipt} title={titleText} value="25,00" noIcon id="button" />
              </Flex>
            </Desktop>
          </Main>
        </Content>

        <Footer />
      </Scroll>
    </Container>
  )
}
