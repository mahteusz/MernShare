import styled from "styled-components";
import { Icon } from "@iconify/react";

export const ToggleSwitch = styled.input.attrs({
  type:"checkbox"
})`
    appearance:none;
    width:45px;
    height:22px;
    background-color:${props => props.theme.colors.backgroundPrimary};
    border-radius:50px;
    border:0;
    cursor:pointer;
    position:relative;

    &:before {
      content:"";
      width:16px;
      height:16px;
      background-color:${props => props.theme.colors.grey};
      border-radius:50%;
      position:absolute;
      top:3px;
      left:4px;
      transition:0.3s ease;
    }

    &:checked:before {
      left:25px;
    }
`

export const ToggleSwitchIcon = styled(Icon)<{active:boolean}>`
  font-size:${props => props.theme.fonts.sizes.small};
  color:#F5C105;
  position:relative;
  left:${props => props.active ? "-42px" : "-18px"};
  top:-2px;
  transition:0.3s ease;
`
