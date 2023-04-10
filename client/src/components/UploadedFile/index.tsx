import { useState } from 'react'
import * as S from './styled'
import Subheading from '../../styled/Subheading'
import { Props } from './types'
import { useNavigate } from 'react-router-dom'

const UploadedFile = ({ link }: Props) => {
  const [copied, setCopied] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
  }

  const handleNavigation = () => {
    const fileId = link.split("file")[1]
    navigate(`file${fileId}`)
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.SuccessIcon />
        <S.HeaderTitle>
          Arquivo enviado com sucesso!

        </S.HeaderTitle>
      </S.HeaderContainer>
      <Subheading>
        Link para o download:
      </Subheading>
      <S.LinkContainer>
        <S.Link onClick={handleNavigation}>
          {link}
        </S.Link>
        <S.CopyIconContainer onClick={handleCopyToClipboard}>
          {copied ? <S.CopiedIcon /> : <S.CopyIcon />}
        </S.CopyIconContainer>
      </S.LinkContainer>
    </S.Container>
  )
}

export default UploadedFile