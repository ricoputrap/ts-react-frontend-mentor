import React from 'react'
import { Image, Name, Wrapper } from './index.styles'
import ImageAvatar from "../../../assets/images/nft-card/image-avatar.png";

interface Props {
  name: string;
}

const Creator: React.FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <Image src={ImageAvatar} alt="avatar" />
      Creations of&nbsp;<Name>{ name }</Name>
    </Wrapper>
  )
}

export default Creator