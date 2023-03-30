import { useEffect, useState } from "react";
import * as S from './styled'
import { useTheme } from "../../contexts/ThemeContext/useTheme";

const ThemeSwitcher = () => {
  const [active, setActive] = useState<boolean>(false)

  const themeData = useTheme()

  useEffect(() => {
    console.log(themeData.theme.name)
    if (themeData.theme.name === "light") {
      setActive(true)
    }
  }, [themeData.loading])



  const handleToggle = () => {
    setActive(!active)
    themeData.toggleTheme()
  }

  return (
    <S.Container onClick={handleToggle}>
      <S.ToggleSwitch
        checked={active}
      />
      <S.ToggleSwitchIcon
        icon={active ? "ph:sun-fill" : "ph:moon-fill"}
        active={active}
      />
    </S.Container>
  )
}

export default ThemeSwitcher