import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import FileCard from '../../components/FileCard'
import Container from '../../styled/Container'
import ContentContainer from '../../styled/ContentContainer'
import { useNavigate, useParams } from 'react-router-dom'
import fileApi from '../../services/api/File'
import { CustomFile } from '../../services/api'
import Spinner from '../../components/Spinner'

const File = () => {
  const [file, setFile] = useState<CustomFile>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id)
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
          <Container>
            <Header />
            <ContentContainer>
              <Spinner />
            </ContentContainer>
          </Container>
      }
    </>
  )
}

export default File