import * as S from './styled'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'

const Home = () => {
  return (
    <S.Container>
      <Header />
      <HomeContent />
    </S.Container>
  )
}

export default Home