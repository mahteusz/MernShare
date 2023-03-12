import styled from "styled-components";

export const Container = styled.main`
  background-color:${props => props.theme.colors.backgroundPrimary};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const H1 = styled.h1`
  color:${props => props.theme.colors.textColor};
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

export const FileTypeContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const FileType = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.small};
  text-align:center;
  margin:5px;
`
