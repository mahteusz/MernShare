import { useState } from 'react'
import * as S from './styled'
import ContentContainer from '../../styled/ContentContainer'
import H1 from '../../styled/Heading'
import Dropzone from '../Dropzone'
import Button from '../Button'
import axios from "axios"
import fileApi from '../../services/api/File'
import Modal from '../Modal'
import UploadedFile from '../UploadedFile'
import { Metadata } from '../../services/api/File/types'

const HomeContent = () => {
  const [fileData, setFileData] = useState<File>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [uploadedFileLink, setUploadedFileLink] = useState<string>('')
  const [metadata, setMetadata] = useState<Metadata>()

  const getMetadata = async () => {
    try {
      const response = await fileApi.getMetadata()
      console.log(response)
      setMetadata(response)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.warn(error.message)
      }
    }
  }

  useState(() => {
    getMetadata()
  })

  const handleSubmit = async () => {
    if (fileData) {
      const formData = new FormData()
      formData.append("file", fileData)
      postFile(formData)
    }
  }

  const postFile = async (formData: FormData) => {
    setIsLoading(true)
    try {
      const response = await fileApi.createFile(formData)
      setUploadedFileLink(`${window.location.href}file/${response?._id}`)
      setIsModalOpen(true)
      getMetadata()
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.warn(error.message)
      }
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Modal
        children={<UploadedFile link={uploadedFileLink} />}
        onClose={() => setIsModalOpen(!isModalOpen)}
        open={isModalOpen}
      />
      <ContentContainer>
        <H1>
          Compartilhe arquivos de forma fácil e prática!
        </H1>
        <S.CustomSubheading>
          Não é necessário registro! Sinta-se à vontade para fazer upload de arquivos
          e enviar para qualquer pessoa.
        </S.CustomSubheading>
        <Dropzone setFileData={setFileData} />
        <Button
          text={isLoading ? "Carregando..." : "Enviar"}
          onClick={handleSubmit}
          styleProps={{
            disabled: fileData === undefined || isLoading,
            marginTop: 40,
            marginBottom: 40
          }}
        />
        <S.InfoCardContainer>
          <S.InfoCard>
            <S.InfoCardIcon icon={"material-symbols:drive-folder-upload-sharp"} />
            <S.InfoCardDataContainer>
              <S.InfoCardDataValue>
                {metadata?.numberOfSentFiles}
              </S.InfoCardDataValue>
              <S.InfoCardDataTitle>
                arquivos enviados
              </S.InfoCardDataTitle>
            </S.InfoCardDataContainer>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardIcon icon={"material-symbols:sim-card-download-sharp"} />
            <S.InfoCardDataContainer>
              <S.InfoCardDataValue>
                {metadata?.downloadedFiles}
              </S.InfoCardDataValue>
              <S.InfoCardDataTitle>
                downloads realizados
              </S.InfoCardDataTitle>
            </S.InfoCardDataContainer>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardIcon icon={"material-symbols:cloud-done-rounded"} />
            <S.InfoCardDataContainer>
              <S.InfoCardDataValue>
                {
                  metadata?.sizeOfSavedData ?
                    `${(metadata.sizeOfSavedData / (1024 * 1024)).toFixed(2)}MB`
                    :
                    0
                }
              </S.InfoCardDataValue>
              <S.InfoCardDataTitle>
                salvos na nuvem
              </S.InfoCardDataTitle>
            </S.InfoCardDataContainer>
          </S.InfoCard>
        </S.InfoCardContainer>
      </ContentContainer>
    </>
  )
}

export default HomeContent