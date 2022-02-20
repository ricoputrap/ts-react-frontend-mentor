import React from 'react'
import { StyledClock, Time as Wrapper } from "./index.styles"


interface Props {
  time: number;
}

const Time: React.FC<Props> = ({ time }) => {
  return (
    <Wrapper>
      <StyledClock />
      { time } days left
    </Wrapper>
  )
}

export default Time