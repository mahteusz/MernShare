import { Icon } from "@iconify/react";
import styled from "styled-components";
import Subheading from "../../styled/Subheading";

export const Container = styled.main`
  background-color:${props => props.theme.colors.backgroundPrimary};
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:100px;
  width:100%;
  min-height:90vh;
  transition:background-color 0.3s ease;

  @media (max-width: 900px) {
    padding:100px 20px 0;
  }
`

export const CustomSubheading = styled(Subheading) `
  margin-bottom:40px;
`

export const InfoCardContainer = styled.div`
  display:flex;
  width:90%;
  justify-content:center;
  flex-wrap:wrap;
  gap:30px;
  margin-bottom:30px;
`

export const InfoCard = styled.div`
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