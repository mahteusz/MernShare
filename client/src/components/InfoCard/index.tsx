import { acceptedFileTypes, maxFileSize } from '../../shared/fileConstants'
import * as S from './styled'

const InfoCard = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.WarningIcon icon="material-symbols:warning" />
        <S.HeaderTitle>
          Ops
        </S.HeaderTitle>
      </S.HeaderContainer>
      <S.Subheading>
        Só é possível enviar arquivos de até
        <S.HighlightedText>
          {` ${maxFileSize.inMegabytes} MB `}
        </S.HighlightedText>
        e com os seguintes formatos:
      </S.Subheading>
      <S.FileTypeContainer>
        {
          Object.keys(acceptedFileTypes).map(key => {
            return acceptedFileTypes[key].map(fileType => {
              return (
                <S.FileType>{fileType}</S.FileType>
              )
            })
          })
        }
      </S.FileTypeContainer>
    </S.Container>
  )
}

export default InfoCard