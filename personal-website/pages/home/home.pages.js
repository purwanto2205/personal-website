import { useEffect, useState } from 'react'
import { Images } from '../../assets'
import {
  Title,
  TextInImage,
  Text,
  Content,
  Container,
  ContainText,
  ImageBackground,
} from './home.style'

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: null, height: null })

  const onResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    <Container>
      <ImageBackground
        images={Images.image3}
        width={dimensions.width}
        minHeight={dimensions.height}
      >
        <TextInImage>Curriculum Vitae</TextInImage>
      </ImageBackground>
      <Content>
        <ContainText>
          <Title>About Purwanto</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </ContainText>
      </Content>
      <Content color={'#0c2836'}>
        <ContainText>
          <Title>WKWKWK</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </ContainText>
      </Content>
    </Container>
  )
}
