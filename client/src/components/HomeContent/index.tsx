import { useState } from 'react'
import * as S from './styled'
import ContentContainer from '../../styled/ContentContainer'
import Subheading from '../../styled/Subheading'
import H1 from '../../styled/Heading'
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
    <ContentContainer>
      <H1>
        Compartilhe arquivos de forma fácil e prática!
      </H1>
      <S.CustomSubheading>
        Não é necessário registro! Sinta-se à vontade para fazer upload de arquivos
        e enviar para qualquer pessoa.
      </S.CustomSubheading>
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
    </ContentContainer>
  )
}

export default HomeContent