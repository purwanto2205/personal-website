import styled from 'styled-components'
import { Images } from '../../assets'

const ImageBackground = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.images});
  min-height: ${(props) => props.minHeight + 'px' || '500px'};
`
const Container = styled.div`
  align-items: center;
`

const Content = styled.div`
  display: flex;
  background-color: ${(props) => props.color || 'white'};
`

const Title = styled.h2`
  text-align: right;
  font-family: 'Helvetica';
`

const TextInImage = styled.h2`
  color: white;
  letter-spacing: 0.1em;
  border-width: 1pt;
  font-family: 'Helvetica';
  padding: 1ch;
  border-color: white;
  border-style: solid;
  text-align: center;
`

const ContainText = styled.div`
  width: 60%;
  display: flex;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  font-family: 'Helvetica';
  text-align: right;
`

export { TextInImage, Text, Title, ContainText, Content, Container, ImageBackground }
