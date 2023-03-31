import styled from "styled-components";

const Subheading = styled.h2`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:normal;
  max-width:700px;
  text-align:center;

  @media (max-width: 768px) {
    font-size:${props => props.theme.fonts.sizes.small};
  }
`

export default Subheading