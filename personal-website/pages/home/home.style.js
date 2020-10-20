import styled from 'styled-components'
import { Images } from '../../assets'

const ImageBackground = styled.div`
  background-image: url(${Images.image1});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
`
const Container = styled.div`
  align-items: center;
`

const About = styled.div`
  width: 60%;
  align-items: flex-end;
  display: block;
  margin-top: 5em;
  margin-bottom: 5em;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  min-height: 500px;
  background-color: white;
`

const Title = styled.h2`
  text-align: right;
`

const TextInImage = styled.h2`
  color: white;
  display: block;
  text-align: center;
`

export { TextInImage, Title, About, Container, ImageBackground }
