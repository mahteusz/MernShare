import * as S from './styled'

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <nav>
        <ul>
          <S.NavItem>Como funciona</S.NavItem>
        </ul>
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