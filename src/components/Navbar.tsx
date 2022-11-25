import React, { useState } from 'react'
import { ToggleTheme } from './'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const navNames = ["Home", "Blog", "Elements", "Portfolio"]

interface Props {
  colorMode: any
  toggleColorMode: any
}

const Navbar = ({ colorMode, toggleColorMode }: Props) => {
  const [activeLink, setActiveLink] = useState<string>('')

  return (
    <div className="navbar__wrapper"
      style={{
        borderBottom: colorMode === "dark" ? "2px solid #03a9f4" : " 2px solid #da86a8"
      }}
    >
      <div className="navbar">
        <div className="navbar__logo" style={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <svg viewBox="0 0 75 82" width="2287" height="2500">
            <path d="M0 15.6V82l21.4-31.3zM0 15.6L15.6 0l38.3 47.8V8.9L75 1.5v58.9L53.9 82z" 
            fill={`${colorMode === "dark" ? "#03a9f4" : "#da96a8"}`}/>
          </svg>
          210Newsroom
        </div>
        <div className="navbar__nav">
          <ul className="navbar__navlinks">
            {navNames.map((item: any, index: number) => (
              <Box
                style={{
                  borderBottom: activeLink === item ?
                    colorMode === "dark" ?
                      '3px solid #03a9f4'
                      :
                      '3px solid #da86a8'
                    :
                    '',
                  color: activeLink === item ?
                    colorMode === "dark" ? '#03a9f4' : '#da86a8'
                    : ''
                }}
                _hover={{
                  borderBottom: colorMode === "dark" ?
                    '3px solid #03a9f4'
                    :
                    '3px solid #da86a8',
                  color: colorMode === "dark" ? '#03a9f4' : '#da86a8'
                }}
                onClick={() => setActiveLink(item)}
              >
                <Link key={index} to={`/${item}`}>{item}</Link>
              </Box>
            ))}
            <ToggleTheme
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Navbar
