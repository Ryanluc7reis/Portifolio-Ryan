import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  max-width: 300px;
  max-height: 200px;
  margin-top: 20px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`

function ContainerSkils({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSkils
