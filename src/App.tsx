import React, {createContext, useContext} from 'react'
import { ThemeProvider, useColorMode } from '@chakra-ui/react'
import { theme } from './utils/theme'
import { AppRouter, Navbar } from './components'
import { BrowserRouter } from 'react-router-dom'
import "./components/styles.scss"
  


function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const ThemeColor = createContext<any>(null)

  return (
    <ThemeColor.Provider
    value={{
        colorMode,
        toggleColorMode
      }}>

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
             <AppRouter />
           </main>
         </div>
       </ThemeProvider>
     </BrowserRouter>
    </ThemeColor.Provider>
  )
}

export default App
