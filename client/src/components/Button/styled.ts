import styled from "styled-components";
import { IStyleProps } from "./types";

export const Button = styled.button<IStyleProps>`
  border:0;
  background-color:${props => props.theme.colors.primary};
  color:${props => props.theme.colors.backgroundPrimary};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:bold;
  text-align:center;
  padding:10px 25px;
  transition:background-color 0.3s ease;

  ${props => {
    if (props.disabled) {
      return `
        opacity:0.3;
      `
    } else {
      return `
        &:hover{
          cursor:pointer;
          background-color:${props.theme.colors.secondary};
        }
      `
    }
  }}

  ${props => {
    if(props.marginTop)
      return `margin-top:${props.marginTop}px`
    if(props.marginRight)
      return `margin-right:${props.marginRight}px`
    if(props.marginBottom)
      return `margin-bottom:${props.marginBottom}px`
    if(props.marginLeft)
      return `margin-left:${props.marginLeft}px`
  }}
`