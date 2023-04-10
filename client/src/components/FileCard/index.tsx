import { useRef } from 'react'
import Button from '../Button'
import * as S from './styled'
import ContentContainer from '../../styled/ContentContainer'
import Props from './types'
import axios from 'axios'
import fileApi from '../../services/api/File'

const FileCard = ({ file }: Props) => {

  const anchorRef = useRef<HTMLAnchorElement>(null)

  const handleDownload = async () => {
    const newFile = await axios.get(file.url, { responseType: 'blob' })
    const fileUrl = window.URL.createObjectURL(newFile.data)
    const anchor = anchorRef.current
    if (anchor) {
      anchor.href = fileUrl;
      anchor.download = file.name
      anchor.click()
      fileApi.updateFile(file._id!, { ...file, numberOfDownloads: file.numberOfDownloads + 1 })
    }
  }

  return (
    <ContentContainer>
      <S.FileCard>
        <S.FileIcon icon={`bxs:file-${file.format}`} />
        <S.FileName>
          {file.name}
        </S.FileName>
        <S.FileSize>
          {`${(file.sizeInBytes / (1024 * 1024)).toFixed(2)}MB`}
        </S.FileSize>
        <Button
          text='Download'
          onClick={handleDownload}
          styleProps={{
            disabled: false
          }}
        />
        <a ref={anchorRef} />
      </S.FileCard>
    </ContentContainer>
  )
}

export default FileCard