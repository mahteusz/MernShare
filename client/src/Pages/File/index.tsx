import { useState, useEffect } from 'react'
import * as S from './styled'
import Header from '../../components/Header'
import FileCard from '../../components/FileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../services/api'

const File = () => {
  const [fileData, setFileData] = useState<File>()
  const { id } = useParams()
  
  useEffect(() => {
    if(id)
      getFile(id)
  }, [])

  const getFile = async (id: string) => {
    try{  
      const response = await api.get(`api.defaults.baseURL!${id}`)
      setFileData(response.data)
      console.log("response", response)
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