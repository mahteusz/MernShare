import styled from "styled-components";

export const BigText = styled.h1`
  color:${props => props.theme.colors.textColor};
  text-align:center;
  font-family:${props => props.theme.fonts.primary};
  font-size:120px;
  font-weight:bold;  
  margin-bottom:15px;
`

