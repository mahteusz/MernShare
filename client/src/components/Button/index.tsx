import * as S from './styled'
import { IProps } from './types'

const Button = ({ text, onClick, styleProps }: IProps) => {
  return (
    <S.Button 
      disabled={styleProps.disabled}
      onClick={onClick}
      marginTop={styleProps?.marginTop}
      marginRight={styleProps?.marginRight}
      marginBottom={styleProps?.marginBottom}
      marginLeft={styleProps?.marginLeft}
    >
      {text}
    </S.Button>
  )
}

export default Button