import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import { acceptedFileTypes } from "../../shared/fileConstants"
import * as S from './styled'

const Dropzone = ({ setFile }: { setFile: Function} ) => {

  const onDrop = (files: File[]) => {
    setFile(files[0])
  }

  const onDropRejected = (files: FileRejection[], event: DropEvent) => {
    console.log(files)
  }

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: acceptedFileTypes
  })

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} readOnly/>
      {
        acceptedFiles.length > 0
          ? acceptedFiles.map((file: File) => {
            return (
              <S.FileInfo>
                {`${file.name} - ${(file.size / (1024 * 1024)).toFixed(2)}MB`}
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