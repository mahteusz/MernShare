import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:${props => props.theme.colors.grey};
  border:4px dashed ${props => props.theme.colors.primary};
  transition:background-color 0.3s ease;

  &:hover {
    cursor:pointer;
  }
`

export const Message = styled.h1`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.xlarge};
  font-weight:bold;  
  text-align:center;
  padding:90px 45px;
`