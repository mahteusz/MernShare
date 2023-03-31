import styled from "styled-components";

const ContentContainer = styled.main`
  background-color:${props => props.theme.colors.backgroundPrimary};
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:100px;
  width:100%;
  min-height:90vh;
  transition:background-color 0.3s ease;
  
  @media (max-width: 900px) {
    padding:100px 20px 0;
  }
`

export default ContentContainer