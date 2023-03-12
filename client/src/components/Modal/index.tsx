import * as S from './styled'
import { IProps } from './types'
import Button from '../Button'

const Modal = ({ open, children, onClose }: IProps) => {
  
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