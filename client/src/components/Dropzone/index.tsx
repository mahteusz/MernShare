import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { acceptedFileTypes, maxFileSize } from "../../shared/fileConstants"
import * as S from './styled'
import InfoCard from "../InfoCard"
import Modal from "../Modal"

const Dropzone = ({ setFile }: { setFile: Function }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const onDrop = (files: File[]) => {
    setFile(files[0])
  }

  const onDropRejected = () => {
    setIsModalOpen(true)
  }

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    maxSize: maxFileSize.inBytes,
    accept: acceptedFileTypes,
  })

  return (
    <>
      <Modal children={<InfoCard />} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <S.Container {...getRootProps()}>
        <input {...getInputProps()} readOnly />
        {
          acceptedFiles.length > 0
            ? acceptedFiles.map((file: File) => {
              return (
                <S.FileInfo>
                  {`${file.name} - ${(file.size / (1024 * 1024)).toFixed(2)}MB`}
                </S.FileInfo>
              )
            })

            :
            <S.Message>
              Clique aqui ou arraste um arquivo
            </S.Message>
        }
      </S.Container>
    </>
  )

}

export default Dropzone