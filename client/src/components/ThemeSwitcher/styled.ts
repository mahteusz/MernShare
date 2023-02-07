import styled from "styled-components";
import { Icon } from "@iconify/react";

export const ToggleSwitch = styled.input.attrs({
  type:"checkbox"
})`
    appearance:none;
    width:60px;
    height:32px;
    background-color:${props => props.theme.colors.backgroundPrimary};
    border-radius:50px;
    border:0;
    cursor:pointer;
    position:relative;

    &:before {
      content:"";
      width:27px;
      height:27px;
      background-color:${props => props.theme.colors.grey};
      border-radius:50%;
      position:absolute;
      top:2px;
      left:2px;
      transition:0.3s ease;
    }

    &:checked:before {
      left:31px;
    }
`

export const ToggleSwitchIcon = styled(Icon)<{active:boolean}>`
  font-size:${props => props.theme.fonts.sizes.medium};
  color:#F5C105;
  position:relative;
  left:${props => props.active ? "-55px" : "-26px"};
  top:-5px;
  transition:0.3s ease;
`
