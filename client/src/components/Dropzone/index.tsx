import { useState } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import { acceptedFileTypes } from "../../shared/fileConstants"
import * as S from './styled'
import InfoCard from "../InfoCard"
import Modal from "../Modal"

const Dropzone = ({ setFile }: { setFile: Function} ) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)  

  const onDrop = (files: File[]) => {
    setFile(files[0])
  }

  const onDropRejected = (files: FileRejection[], event: DropEvent) => {
    setIsModalOpen(true)
  }

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: acceptedFileTypes
  })

  return (
    <S.Container {...getRootProps()}>
      <Modal children={<InfoCard />} open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
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