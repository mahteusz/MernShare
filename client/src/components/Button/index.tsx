import * as S from './styled'
import { IProps } from './types'

const Button = ({ text, onClick, styleProps }: IProps) => {
  return (
    <S.Button 
      disabled={styleProps.disabled}
      onClick={onClick}
      marginTop={styleProps?.marginTop ?? 0}
      marginRight={styleProps?.marginRight ?? 0}
      marginBottom={styleProps?.marginBottom ?? 0}
      marginLeft={styleProps?.marginLeft ?? 0}
    >
      {text}
    </S.Button>
  )
}

export default Button