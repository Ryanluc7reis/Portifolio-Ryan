import styled from 'styled-components'

import H3 from '../src/components/typography/H3'
import H4 from '../src/components/typography/H4'
import H5 from '../src/components/typography/H5'
import Title from '../src/components/layout/Title'
import Button from '../src/components/inputs/Button'

import ContainerUm from '../src/components/layout/ContainerUm'
import ContainerDois from '../src/components/layout/ContainerDois'
import ContainerSkils from '../src/components/layout/ContainerSkils'
import ContainerSobremim from '../src/components/layout/ContainerSobremim'
import ContainerProjects from '../src/components/layout/ContainerProjects'

import Contacts from '../src/components/layout/Contacts'
import ProjectsCards from '../src/components/inputs/ProjectsCards'

import WhatzImage from '../src/components/contacts-image/whtaz'
import GitImage from '../src/components/contacts-image/git'
import EmailImage from '../src/components/contacts-image/email'
import LinkeImage from '../src/components/contacts-image/linkedin'

const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`
const handleClick = () => {
  return <div>i</div>
}
function HomePage({ image, imageDois, imageTres }) {
  return (
    <>
      <>
        <StyledFlex>
          <StyledImage image={image}>
            <ContainerUm>
              <Contacts>
                <WhatzImage onClick={handleClick} />
                <GitImage onCLick={''} />
                <EmailImage onCLick={''} />
                <LinkeImage onCLick={''} />
              </Contacts>
              <H3>Olá, Eu sou o Ryan Lucas</H3>
              <H4>E eu sou um desenvolvedor de software fullstack focado em contruir Websites!</H4>
              <Button>PROJETOS</Button>
            </ContainerUm>
          </StyledImage>
        </StyledFlex>
      </>
      <>
        <StyledImage image={imageDois}>
          <ContainerDois>
            <ContainerSobremim>
              <H3>Sobre mim</H3>
              <H4>
                No ano de 2021 começei a me interessar com programação,e desde então venho estudando{' '}
              </H4>
            </ContainerSobremim>
            <ContainerSkils>
              <H3>Habilidades</H3>
              <H4>HTML,JavaScipt,React,moongose</H4>
            </ContainerSkils>
          </ContainerDois>
        </StyledImage>
      </>
      <>
        <StyledImage image={imageTres}>
          <Title>PROJETOS</Title>
          <ContainerProjects>
            <ProjectsCards>
              <H4>Social Dev</H4>
              <H5>
                Foi construída uma rede social usando ReactJs,NextJs,NodeJs,MongoDb,mongoose e
                styled components.
              </H5>
              <Button>Visitar projeto</Button>
            </ProjectsCards>
            <ProjectsCards>
              <H4>Jogo da velha</H4>
              <H5>
                Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                de estados dentro do ReactJS.
              </H5>
              <Button>Visitar projeito</Button>
            </ProjectsCards>
          </ContainerProjects>
        </StyledImage>
      </>
    </>
  )
}
HomePage.defaultProps = {
  image: '/aa416637aae576fc9f1dde64c8b17816.jpg',
  imageDois: '/original-4ab4debcd15404252b095da71afc6b65.jpg',
  imageTres: '/telapreta-background.jpg'
}

export default HomePage
