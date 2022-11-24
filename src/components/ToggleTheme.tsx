import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleToggleTheme = () => {
    toggleColorMode()
  }

  return (
    <Button
      onClick={handleToggleTheme}
      justifySelf={'flex-end'}
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )

}

export default ToggleTheme
