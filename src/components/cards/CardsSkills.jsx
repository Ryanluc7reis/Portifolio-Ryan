import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
const StyledChildren = styled.div`
  width: 115px;
  height: 47px;
  background-color: #827f7e;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #27201e;
`

function CardsSkills({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default CardsSkills
