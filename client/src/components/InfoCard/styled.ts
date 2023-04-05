import { Icon } from "@iconify/react";
import styled from "styled-components";
import Heading from "../../styled/Heading";

export const Container = styled.main`
  background-color:${props => props.theme.colors.backgroundPrimary};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const HeaderContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

export const HeaderTitle = styled(Heading)`
  color:${props => props.theme.colors.secondary};
  margin:10px;
`

export const HighlightedText = styled.span`
  font-weight:bold;
  color:${props => props.theme.colors.secondary};
`

export const FileTypeContainer = styled.ul`
  display:flex;
  align-items:center;
  justify-content:center;
`

export const FileType = styled.li`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.small};
  text-align:center;
  margin:5px;
  list-style:none;
`

export const WarningIcon = styled(Icon).attrs(() => ({
  icon:'material-symbols:warning'
}))
`
  font-size:32px;
  color:${props => props.theme.colors.secondary};
`


