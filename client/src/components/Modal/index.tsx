import { useEffect } from 'react'
import * as S from './styled'
import { Props } from './types'
import Button from '../Button'

const Modal = ({ open, children, onClose }: Props) => {
  
  useEffect(() => {
    if(open)
      disableBodyScroll()
    else
      enableBodyScroll()
  }, [open])

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableBodyScroll = () => {
    document.body.style.overflow = 'unset'
  }

  const renderContent = () => {
    return (
      <S.Container>
        <S.ContentContainer>
          <S.CloseButton onClick={onClose}>
            <S.CloseButtonIcon />
          </S.CloseButton>
          {children}
          <Button 
            onClick={onClose}
            text='Fechar'
            styleProps={{
                disabled:false,
                marginTop:40
              }
            }
          />
        </S.ContentContainer>
      </S.Container>
    )
  }

  return (
    <>
      {
        open ? renderContent() : null
      }
    </>
  )

}

export default Modal