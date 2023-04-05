import { useState } from 'react'
import * as S from './styled'
import Subheading from '../../styled/Subheading'
import { Props } from './types'

const UploadedFile = ({ link }: Props) => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
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
        <S.Link>
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