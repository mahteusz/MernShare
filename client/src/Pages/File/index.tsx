import { useState, useEffect } from 'react'
import * as S from './styled'
import Header from '../../components/Header'
import FileCard from '../../components/FileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import fileApi from '../../services/api/File'

const File = () => {
  const [fileData, setFileData] = useState<File>()
  const { id } = useParams()
  
  useEffect(() => {
    if(id)
      getFile(id)
  }, [])

  const getFile = async (id: string) => {
    try{  
      const data = await fileApi.getFile(id)
      setFileData(data)
      console.log("data", data)
    } catch(error) {
      if(axios.isAxiosError(error)){
        console.warn(error.message)
      }
    }
  }

  return (
    <S.Container>
      <Header />
      <FileCard />
    </S.Container>
  )
}

export default File