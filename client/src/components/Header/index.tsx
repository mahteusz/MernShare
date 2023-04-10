import * as S from './styled'
import ThemeSwitcher from '../ThemeSwitcher'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <nav>
        <S.NavItemsContainer>
          <ThemeSwitcher />
        </S.NavItemsContainer>
      </nav>
    </S.Container>
  )
}

const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <S.LogoContainer onClick={handleClick}>
      <S.LogoIcon />
      <S.Mern />
      <S.Share />
    </S.LogoContainer>
  )
}

export default Header