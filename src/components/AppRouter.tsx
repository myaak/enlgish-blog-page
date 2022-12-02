import { Routes, Route } from 'react-router-dom'
import Blog from '../screens/Blog'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import LoginPage from '../screens/LoginPage'
import { publicRoutes } from '../routes'
import { useContext } from 'react'
import { AccountContext } from './UserContext'

interface Props {
  themeColor: string
}

const AppRouter = ({ themeColor }: Props) => {

  const {user} = useContext(AccountContext)

  return user.loggedIn ? (
    <Routes>
      {publicRoutes.map((item: any, index: number) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
      <Route key={4} path={"/blog"} element={<Blog themeColor={themeColor} />} />
    </Routes>
  )
    :
    (
    <Routes>
      <Route key={4} path={"/blog"} element={<Blog themeColor={themeColor} />} />
      <Route key={5} path={"/login"} element={<LoginPage />} />
      <Route key={6} path={"/signup"} element={<SignUp />} />
      </Routes>
    )


}

export default AppRouter
