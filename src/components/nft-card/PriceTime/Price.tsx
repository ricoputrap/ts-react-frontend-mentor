import React from 'react'
import { Price as Wrapper, StyledETH } from "./index.styles"

interface Props {
  price: number;
}

const Price: React.FC<Props> = ({ price }) => {
  return (
    <Wrapper>
      <StyledETH />
      <span>{price} ETH</span>
    </Wrapper>
  )
}

export default Price