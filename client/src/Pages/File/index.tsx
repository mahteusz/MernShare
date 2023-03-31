import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import FileCard from '../../components/FileCard'
import Container from '../../styled/Container'
import { useNavigate, useParams } from 'react-router-dom'
import fileApi from '../../services/api/File'
import { CustomFile } from '../../services/api'

const File = () => {
  const [file, setFile] = useState<CustomFile>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(id)
      getFile(id)
  }, [])

  const handleNavigation = () => {
    navigate("/not-found")
  }

  const getFile = async (id: string) => {
    try {
      const fileData = await fileApi.getFile(id)
      setFile(fileData)
    } catch (error) {
      handleNavigation()
    }
  }

  return (
    <>
      {
        file ?
          <Container>
            <Header />
            <FileCard file={file} />
          </Container>
          :
          <></>
      }
    </>
  )
}

export default File