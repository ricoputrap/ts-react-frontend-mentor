import React from 'react'
import ImageQRCode from "../../assets/images/image-qr-code.png"
import { Card, Description, Image, Screen, TextWrapper, Title, Wrapper } from './index.styles'

const QRCode: React.FC = () => {
  return (
    <Screen>
      <Card>
        <Wrapper>
          <Image src={ ImageQRCode } alt="qr-code"/>
          <TextWrapper>
            <Title>
              Improve your front-end skills by building projects
            </Title>
            <Description>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </Description>
          </TextWrapper>
        </Wrapper>
      </Card>
    </Screen>
  )
}

export default QRCode