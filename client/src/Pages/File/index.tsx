import { useState, useEffect } from 'react'
import * as S from './styled'
import Header from '../../components/Header'
import FileCard from '../../components/FileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import fileApi from '../../services/api/File'
import { CustomFile } from '../../services/api'

const File = () => {
  const [file, setFile] = useState<CustomFile>()
  const { id } = useParams()

  useEffect(() => {
    if (id)
      getFile(id)
  }, [])

  const getFile = async (id: string) => {
    try {
      const fileData = await fileApi.getFile(id)
      setFile(fileData)
      console.log("data", fileData)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.warn(error.message)
      }
    }
  }

  return (
    <>
      {
        file ?
          <S.Container>
            <Header />
            <FileCard file={file} />
          </S.Container>
          :
          <></>
      }
    </>
  )
}

export default File