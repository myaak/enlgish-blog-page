import {ThemeProvider} from '@chakra-ui/react'
import  {theme}  from './utils/theme'
import {AppRouter, Navbar} from './components'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <AppRouter />
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
