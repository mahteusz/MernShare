import { Icon } from "@iconify/react";
import styled from "styled-components";

export const FileCard = styled.div`
  display:flex;
  max-width:90%;
  flex-direction:column;
  justify-content:center;
  padding:50px 80px;
  align-items:center;
  border:4px solid ${props => props.theme.colors.primary};
  gap:10px;
`

export const FileName = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.large};
  text-align:center;
  max-width:300px;
  overflow-wrap: break-word;
`

export const FileSize = styled.span`
  color:${props => props.theme.colors.secondary};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.medium};
  text-align:center;
`

export const FileIcon = styled(Icon)`
  font-size:128px;
  color:${props => props.theme.colors.secondary};
`