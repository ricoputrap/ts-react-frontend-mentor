import React from 'react'
import { Wrapper } from './index.styles'
import Price from './Price';
import Time from "./Time";

interface Props {
  price: number;
  time: number;
}

const PriceTime: React.FC<Props> = ({ price, time }) => {
  return (
    <Wrapper>
      <Price price={price} />
      <Time time={time} />
    </Wrapper>
  )
}

export default PriceTime