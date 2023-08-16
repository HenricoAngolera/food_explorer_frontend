import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import { Container, Button, QuantityNumber } from './styles'

export function Quantity({ number }) {
  return (
    <Container>
      <Button>
        <AiOutlinePlus />
      </Button>
      <QuantityNumber>{number}</QuantityNumber>
      <Button>
        <AiOutlineMinus />
      </Button>
    </Container>
  )
}
