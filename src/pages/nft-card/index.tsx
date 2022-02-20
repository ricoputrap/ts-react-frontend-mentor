import React from 'react'
import { Card, Image, Screen, Text, Details, Title, Wrapper } from './index.styles'
import ImageEquilibrium from "../../assets/images/nft-card/image-equilibrium.jpg";
import { PriceTime } from '../../components/nft-card';
import Creator from '../../components/nft-card/Creator';

const NFTCard: React.FC = () => {
  return (
    <Screen>
      <Card>
        <Wrapper>
          <Image src={ImageEquilibrium} alt="equilibrium" />
          <Details>
            <Title>Equilibrium #3429</Title>
            <Text>Our Equilibrium collection promotes balance and calm.</Text>
            <PriceTime price={0.041} time={3} />
            <Creator name="Jules Wyvern"/>
          </Details>
        </Wrapper>
      </Card>
    </Screen>
  )
}

export default NFTCard