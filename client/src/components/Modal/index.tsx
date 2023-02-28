import * as S from './styled'
import { IProps } from './types'
import Button from '../Button'

const Modal = ({ children }: IProps) => {
  return (
    <S.Container>
      {children}
      <Button 
        onClick={() => {}}
        text='Fechar'
        styleProps={{
            disabled:true,
          }
        }
      />
    </S.Container>
  )
}

export default Modal