import React, { useContext, useState } from 'react'
import { ToggleTheme } from './'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { AccountContext } from './UserContext'
import UserPanel from './UserPanel'

const navNames = ["Home", "Blog", "Elements", "Portfolio"]

interface Props {
  colorMode: any
  toggleColorMode: any
}

const Navbar = ({ colorMode, toggleColorMode }: Props) => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [openHamburger, setOpenHamburger] = useState<boolean>(false)
  const [openUserPanel, setOpenUserPanel] = useState<boolean>(false)

  const { user } = useContext(AccountContext)

  const handleOpenHamburger = () => {
    setOpenHamburger((prev: boolean) => !prev)
  }

  const handleOpenUserPanel = () => {
    setOpenUserPanel((prev: boolean) => !prev)
  }

  return (
    <div className="navbar__wrapper"
      style={{
        borderBottom: colorMode === "dark" ? "2px solid #03a9f4" : " 2px solid #03a9f4" //#da96a8
      }}
    >
      {openUserPanel && <UserPanel closePanel={handleOpenUserPanel} themeColor={colorMode}/>}
      <div className="navbar">
        <div className="navbar__logo" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5px 5px'
        }}>
          <svg viewBox="0 0 75 82" width="65" height="65">
            <path d="M0 15.6V82l21.4-31.3zM0 15.6L15.6 0l38.3 47.8V8.9L75 1.5v58.9L53.9 82z"
              fill={`${colorMode === "dark" ? "#03a9f4" : "#03a9f4"}`} />
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
                      '3px solid #03a9f4' //#da86a8
                    :
                    '',
                  color: activeLink === item ?
                    colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                    : ''
                }}
                _hover={{
                  borderBottom: colorMode === "dark" ?
                    '3px solid #03a9f4'
                    :
                    '3px solid #03a9f4', //#da86a8
                  color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                }}
                onClick={() => setActiveLink(item)}
              >
                <Link key={index} to={`/${item}`}>{item}</Link>
              </Box>
            ))}
            {user.loggedIn ?
              <Box
                _hover={{
                  borderBottom: colorMode === "dark" ?
                    '3px solid #03a9f4'
                    :
                    '3px solid #03a9f4', //#da86a8
                  color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                }}
                onClick={handleOpenUserPanel}
              >
                {user.username}
              </Box>
              :
              <Box
                _hover={{
                  borderBottom: colorMode === "dark" ?
                    '3px solid #03a9f4'
                    :
                    '3px solid #03a9f4', //#da86a8
                  color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                }}
              >
                <Link key={10} to={`/login`}>
                  <svg className="user" width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" fill={`${colorMode === "dark" ? "#E8E8E8" : "#000"}`} />
                  </svg>
                </Link>
              </Box>
            }
            <ToggleTheme
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </ul>
        </div>
        <div className="navbar__mobile">
          <button onClick={handleOpenHamburger}><HamburgerIcon
            style={{
              width: '30px',
              height: '30px'
            }} /></button>
          {
            openHamburger &&
            <div className="navbar__mobile__nav" style={{
              backgroundColor: colorMode === "dark" ? "#1a202c" : "#fff"
            }}>
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '10px 10px',
              }}>
                <button onClick={handleOpenHamburger}><CloseIcon /></button>
              </div>
              <ul className="navbar__mobile__nav__links" style={{
              }}>
                <ToggleTheme
                  colorMode={colorMode}
                  toggleColorMode={toggleColorMode}
                />
                {navNames.map((item: any, index: number) => (
                  <li className="" style={{
                    marginTop: index === 0 ? "15px" : "0"
                  }}>
                    <Link key={index} to={`/${item}`}
                      style={{
                        height: '100%'
                      }}>
                      <Box
                        style={{
                          border: activeLink === item ?
                            colorMode === "dark" ?
                              '3px solid #03a9f4'
                              :
                              '3px solid #03a9f4'
                            :
                            '',
                          color: activeLink === item ?
                            colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                            : ''
                        }}
                        _hover={{
                          border: colorMode === "dark" ?
                            '3px solid #03a9f4'
                            :
                            '3px solid #03a9f4', //#da86a8
                          color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                        }}
                        onClick={() => {
                          setActiveLink(item)
                          setOpenHamburger((prev: boolean) => !prev)
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  </li>
                ))}
                {user.loggedIn ?
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                    _hover={{
                      borderBottom: colorMode === "dark" ?
                        '3px solid #03a9f4'
                        :
                        '3px solid #03a9f4', //#da86a8
                      color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                    }}
                    onClick={() => {
                      handleOpenHamburger()
                      handleOpenUserPanel()
                    }}
                  >
                    <Box style={{
                      display: 'flex',
                      gap: '10px'
                    }}>
                      {user.username}
                    </Box>
                  </Box>
                  :
                  <Link key={10} to={`/login`}>
                    <Box
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                      _hover={{
                        borderBottom: colorMode === "dark" ?
                          '3px solid #03a9f4'
                          :
                          '3px solid #03a9f4', //#da86a8
                        color: colorMode === "dark" ? '#03a9f4' : '#03a9f4' //#da86a8
                      }}
                      onClick={() => {
                        setActiveLink('login')
                        setOpenHamburger((prev: boolean) => !prev)
                      }}
                    >
                      <Box style={{
                        display: 'flex',
                        gap: '10px'
                      }}>
                        Login
                      </Box>
                    </Box>
                  </Link>
                }
              </ul>
            </div>
          }

        </div>
      </div>
    </div >
  )

}

export default Navbar
