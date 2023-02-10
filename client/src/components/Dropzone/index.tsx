import { useDropzone } from "react-dropzone"
import * as S from './styled'

const Dropzone = () => {

  const onDrop = (files: File[]) => {
    console.log(files)
  }

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop })


  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
      {
        acceptedFiles.length > 0
          ? acceptedFiles.map((file: File) => {
              return (
                <S.FileInfo>
                  {`${file.name} - ${(file.size/(1024*1024)).toFixed(2)}MB`}
                </S.FileInfo>
              )
            })

          : <S.Message>
              Clique aqui ou arraste um arquivo
            </S.Message>
      }
    </S.Container>
  )
}

export default Dropzone