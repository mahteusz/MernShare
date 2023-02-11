import { useState } from 'react'
import * as S from './styled'
import Dropzone from '../Dropzone'
import axios, { AxiosError } from "axios"

const HomeContent = () => {
  const [file, setFile] = useState<File>()

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", JSON.stringify(file))
    if(file){
      postFile(formData)
    }
  }

  const postFile = async (formData: FormData) => {
      const response = axios<File>({
        method:"POST",
        data: formData,
        url:"http://localhost:8000/api/files",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(response)
  }

  return (
    <S.Container>
      <S.H1>
        Compartilhe arquivos de forma fácil e prática!
      </S.H1>
      <S.Subtitle>
        Não é necessário registro! Sinta-se à vontade para fazer upload de arquivos
        e enviar para qualquer pessoa.
      </S.Subtitle>
      <Dropzone setFile={setFile}/>
      <S.SubmitButton 
        onClick={handleSubmit}
        disabled={file===undefined}
        >
        Enviar
      </S.SubmitButton>
      <S.InfoCardContainer>
        <S.InfoCard>
          <S.InfoCardIcon icon={"material-symbols:drive-folder-upload-sharp"}/>
          <S.InfoCardDataContainer>
            <S.InfoCardDataValue>
              645
            </S.InfoCardDataValue>
            <S.InfoCardDataTitle>
              arquivos enviados
            </S.InfoCardDataTitle>
          </S.InfoCardDataContainer>
        </S.InfoCard>
        <S.InfoCard>
          <S.InfoCardIcon icon={"material-symbols:sim-card-download-sharp"}/>
          <S.InfoCardDataContainer>
            <S.InfoCardDataValue>
              248
            </S.InfoCardDataValue>
            <S.InfoCardDataTitle>
              arquivos baixados
            </S.InfoCardDataTitle>
          </S.InfoCardDataContainer>
        </S.InfoCard>
        <S.InfoCard>
          <S.InfoCardIcon icon={"material-symbols:cloud-done-rounded"}/>
          <S.InfoCardDataContainer>
            <S.InfoCardDataValue>
              942MB
            </S.InfoCardDataValue>
            <S.InfoCardDataTitle>
              salvos na nuvem
            </S.InfoCardDataTitle>
          </S.InfoCardDataContainer>
        </S.InfoCard>
      </S.InfoCardContainer>
    </S.Container>
  )
}

export default HomeContent