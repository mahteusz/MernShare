import styled from "styled-components";

const Heading = styled.h1`
  color:${props => props.theme.colors.textColor};
  text-align:center;
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.xlarge};
  font-weight:bold;  

  @media (max-width: 768px) {
    font-size:${props => props.theme.fonts.sizes.medium};
  }
`

export default Heading