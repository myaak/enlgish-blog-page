import React, { createContext, useContext } from 'react'
import { ThemeProvider, useColorMode } from '@chakra-ui/react'
import { theme } from './utils/theme'
import { AppRouter, Navbar } from './components'
import { BrowserRouter } from 'react-router-dom'
import "./components/styles.scss"
import './font/Sora-Regular.ttf'



function App() {

  const { colorMode, toggleColorMode } = useColorMode()



  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <Navbar
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </header>
          <main>
            <AppRouter themeColor={colorMode} />
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
