import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  max-width:90%;
  flex-direction:column;
  justify-content:center;
  padding:90px 45px;
  align-items:center;
  background:${props => props.theme.colors.grey};
  border:4px dashed ${props => props.theme.colors.primary};
  transition:background-color 0.3s ease;
  width:700px;
  gap:20px;

  &:hover {
    cursor:pointer;
  }

  @media (max-width: 768px) {
    padding:60px 20px;
  }
  
`

export const Message = styled.span`
  color:${props => props.theme.colors.textColor};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:normal;
  text-align:center;

  @media (max-width: 768px) {
    font-size:${props => props.theme.fonts.sizes.small};
  }
`

export const FileInfo = styled(Message)`
  color:${props => props.theme.colors.primary};
  word-break:break-all;
`
