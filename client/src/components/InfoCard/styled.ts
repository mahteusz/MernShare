import { Icon } from "@iconify/react";
import styled from "styled-components";

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

export const HeaderTitle = styled.h1`
  color:${props => props.theme.colors.secondary};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.xlarge};
  font-weight:bold;
  margin:10px 0;
`

export const Subheading = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.medium};
  text-align:center;
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

export const WarningIcon = styled(Icon)`
  font-size:48px;
  color:${props => props.theme.colors.secondary};
`


