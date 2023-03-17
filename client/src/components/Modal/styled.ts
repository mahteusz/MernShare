import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Container = styled.div`
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  z-index:10;
  background-color:rgba(0,0,0,0.7);
`

export const ContentContainer = styled.div`
  padding:50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:${props => props.theme.colors.backgroundPrimary};
  position:relative;
`

export const CloseButton = styled.button`
  position:absolute;
  right:0;
  top:0;
  background-color:${props => props.theme.colors.backgroundPrimary};
  border:none;

  &:hover {
    cursor:pointer;
  }
`

export const CloseButtonIcon = styled(Icon).attrs(() => ({
  icon:'material-symbols:close'
}))
`
  font-size:48px;
  color:${props => props.theme.colors.secondary};
`




