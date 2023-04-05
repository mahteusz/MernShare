import styled from "styled-components";
import { Icon } from "@iconify/react";
import Heading from "../../styled/Heading";

export const Container = styled.div`
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
  color:${props => props.theme.colors.primary};
  margin:10px;
`

export const SuccessIcon = styled(Icon).attrs(() => ({
  icon: 'mdi:check-circle'
}))
  `
  font-size:32px;
  color:${props => props.theme.colors.primary};
`

export const LinkContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  border:1px solid ${props => props.theme.colors.secondary};  

`

export const Link = styled.span`
  font-weight:bold;
  color:${props => props.theme.colors.secondary};
  font-family:${props => props.theme.fonts.primary};
  text-align:center;
  padding:10px;
`

export const CopyIconContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-left:1px solid ${props => props.theme.colors.secondary};
  padding:10px;

  &:hover {
    cursor:pointer;
  }

`

export const CopyIcon = styled(Icon).attrs(() => ({
  icon: 'mdi:content-copy'
}))
  `
  font-size:24px;
  color:${props => props.theme.colors.secondary};
`

export const CopiedIcon = styled(Icon).attrs(() => ({
  icon: 'mdi:check'
}))
  `
  font-size:24px;
  color:${props => props.theme.colors.secondary};
`
