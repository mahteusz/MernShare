import React from 'react'
import ContentContainer from '../../styled/ContentContainer'
import H1 from '../../styled/Heading'
import * as S from './styled'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const NotFoundContent = () => {

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/")
  }

  return (
    <ContentContainer>
      <S.BigText>
        404
      </S.BigText>
      <H1>
        Oops... Página não encontrada!
      </H1>
      <Button 
        text='Voltar ao início'
        onClick={handleNavigation}
        styleProps={{
          disabled:false,
          marginTop:15
        }}
      />
    </ContentContainer>
  )
}

export default NotFoundContent