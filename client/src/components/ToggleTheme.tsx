import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
interface Props {
  colorMode:any,
  toggleColorMode:any
}

const ToggleTheme = ({colorMode, toggleColorMode}:Props) => {

  const handleToggleTheme = () => {
    toggleColorMode()
  }

  return (
    <Button
      onClick={handleToggleTheme}
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )

}

export default ToggleTheme
