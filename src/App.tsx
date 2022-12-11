import React, { createContext, useContext } from 'react'
import { ThemeProvider, useColorMode } from '@chakra-ui/react'
import { theme } from './utils/theme'
import { AppRouter, Navbar } from './components'
import { BrowserRouter } from 'react-router-dom'
import UserContext, { AccountContext } from './components/UserContext'
import "./components/styles.scss"
import Dashboard from './components/Dashboard'
import './font/Sora-Regular.ttf'



function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  const { user, setUser } = useContext(AccountContext)

  return (
    <UserContext>
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
    </UserContext>
  )
}

export default App
