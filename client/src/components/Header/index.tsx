import * as S from './styled'
import ThemeSwitcher from '../ThemeSwitcher'

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <nav>
        <S.NavItemsContainer>
          <S.NavItem>Como funciona</S.NavItem>
          <ThemeSwitcher />
        </S.NavItemsContainer>
      </nav>
    </S.Container>
  )
}

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.LogoIcon
        icon={"material-symbols:file-copy-sharp"}
      />
      <S.Mern />
      <S.Share />
    </S.LogoContainer>
  )
}

export default Header