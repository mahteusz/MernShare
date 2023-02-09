import { useDropzone } from "react-dropzone"
import * as S from './styled'

const Dropzone = () => {
  const { getRootProps, getInputProps } = useDropzone({})

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
      <S.Message>
        Clique aqui ou arraste um arquivo
      </S.Message>
    </S.Container>
  )
}

export default Dropzone