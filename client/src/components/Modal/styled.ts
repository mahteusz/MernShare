import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  z-index:10;
  background-color:white;
`

export const CloseButton = styled.button`
  border:0;
  background-color:${props => props.theme.colors.primary};
  color:${props => props.theme.colors.backgroundPrimary};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:bold;
  text-align:center;
  padding:10px 25px;
  transition:background-color 0.3s ease;

  &:hover{
    cursor:pointer;
    background-color:${props => props.theme.colors.secondary};
  }
`

