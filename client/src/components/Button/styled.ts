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
  margin-top:${props => props.marginTop}px;
  margin-right:${props => props.marginRight}px;
  margin-bottom:${props => props.marginBottom}px;
  margin-left:${props => props.marginLeft}px;

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
`