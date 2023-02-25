import * as S from './styled'

const FileCard = () => {
  return (
    <S.Container>
      <S.FileCard>
        <S.FileIcon icon={'bxs:file-png'} />
        <S.FileName>
          image.png
        </S.FileName>
        <S.FileSize>
          931.12 KB
        </S.FileSize>
        <S.Button>
          Download
        </S.Button>
      </S.FileCard>
    </S.Container>
  )
}

export default FileCard