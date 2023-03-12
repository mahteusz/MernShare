import { acceptedFileTypes, maxFileSize } from '../../shared/fileConstants'
import * as S from './styled'

const InfoCard = () => {
  return (
    <S.Container>
      <S.H1>
        Ops...
      </S.H1>
      <S.Subheading>
        {`Só é possível enviar arquivos de até ${maxFileSize.inMegabytes}MB e com os seguintes formatos:`}
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
      </S.Subheading>
    </S.Container>
  )
}

export default InfoCard