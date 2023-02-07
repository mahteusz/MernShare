import React, { useState } from "react";
import * as S from './styled'

const Toggle = () => {

  const [active, setActive] = useState<boolean>(false)

  return (
    <div>
      <S.ToggleSwitch 
        onClick={() => setActive(!active)}
      />
      <S.ToggleSwitchIcon
        icon={active ? "ph:moon-fill" : "ph:sun-fill"}
        active={active}
      />
    </div>
  )
}

export default Toggle