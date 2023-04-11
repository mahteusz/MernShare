import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  background-color: ${props => props.theme.colors.backgroundPrimary}
`

export default Container