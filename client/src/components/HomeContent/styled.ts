import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Container = styled.main`
  background-color:${props => props.theme.colors.backgroundPrimary};
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:110px 200px;
  width:100%;
  height:90vh;
  transition:background-color 0.3s ease;
`

export const H1 = styled.h1`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.xlarge};
  font-weight:bold;  
  margin-bottom:15px;
`

export const Subheading = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.medium};
  max-width:700px;
  text-align:center;
  margin-bottom:80px;
`

export const InfoCardContainer = styled.div`
  display:flex;
  gap:30px;
`

export const InfoCard = styled.div`
  margin-top:40px;
  width:250px;
  justify-content:center;
  display:flex;
  padding:35px 0;
  background-color:${props => props.theme.colors.backgroundSecondary};
  gap:20px;
`

export const InfoCardDataContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export const InfoCardDataTitle = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.small};
`

export const InfoCardDataValue = styled.span`
  color:${props => props.theme.colors.secondary};
  font-family:${props => props.theme.fonts.secondary};
  font-size:${props => props.theme.fonts.sizes.small};
  font-weight:bold;
`

export const InfoCardIcon = styled(Icon)`
  font-size:48px;
  color:${props => props.theme.colors.secondary};
`