import { useState } from 'react'
import * as S from './styled'
import Dropzone from '../Dropzone'
import Button from '../Button'
import axios from "axios"
import fileApi from '../../services/api/File'

const HomeContent = () => {
  const [fileData, setFileData] = useState<File>()
  
  const handleSubmit = async () => {
    if(fileData){
      const formData = new FormData()
      formData.append("file", fileData)
      postFile(formData)
    }
  }

  const postFile = async (formData: FormData) => {
    try{  
      const response = await fileApi.createFile(formData)
      console.log("response", response)
    } catch(error) {
      if(axios.isAxiosError(error)){
        console.warn(error.message)
      }
    }
  }

  return (
    <S.Container>
      <S.H1>
        Compartilhe arquivos de forma fácil e prática!
      </S.H1>
      <S.Subheading>
        Não é necessário registro! Sinta-se à vontade para fazer upload de arquivos
        e enviar para qualquer pessoa.
      </S.Subheading>
      <Dropzone setFileData={setFileData}/>
      <Button
        text='Enviar'
        onClick={handleSubmit}
        styleProps={{
          disabled: fileData===undefined,
          marginTop:40,
          marginBottom:40
        }}
      />
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