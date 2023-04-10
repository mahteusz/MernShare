import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Container = styled.header`
  display:flex;
  background-color:${props => props.theme.colors.backgroundSecondary};
  width:100%;
  padding:0 20px;
  height:10vh;
  justify-content:space-between;
  align-items:center;
  transition:background-color 0.3s ease;
`

export const NavItemsContainer = styled.ul`
  display:flex;
  align-items:center;
  gap:150px;
  justify-content:space-around;
`

export const NavItem = styled.li`
  list-style-type:none;
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:bold;
  border-bottom:2px solid ${props => props.theme.colors.primary};
  border-left:3px solid ${props => props.theme.colors.primary};
  padding:3px 10px;
  transition:transform 0.3s ease;

  &:hover {
    cursor:pointer;
    transform:scale(1.06);
  }
`

export const LogoContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  transition:transform 0.3s ease;
  align-self:center;

  &:hover {
    cursor:pointer;
    transform:scale(1.06);
  }
`

export const LogoIcon = styled(Icon).attrs(() => ({
  icon:'material-symbols:file-copy-sharp'
}))`
  font-size:${props => props.theme.fonts.sizes.xlarge};
  color:${props => props.theme.colors.primary};
`

export const Mern = styled.span`
  font-family:'Montserrat', sans-serif;
  color:${props => props.theme.colors.secondary};
  font-weight:bold;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  text-transform:uppercase;
  &:after{
    content:"MERN"
  }
`

export const Share = styled(Mern)`
  color:${props => props.theme.colors.primary};
  &:after{
    content:"SHARE"
  }
`