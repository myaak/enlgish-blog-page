import {Routes, Route} from 'react-router-dom'
import Blog from '../screens/Blog'
import {publicRoutes} from '../routes'

interface Props {
  themeColor: string
}

const AppRouter = ({themeColor}: Props) => {
  return(
      <Routes>
        {publicRoutes.map((item:any, index:number) => (
              <Route key={index} path={item.path} element={item.element}/>
        ))}
      <Route key={4} path={"/blog"} element={<Blog themeColor={themeColor}/>}/>
      </Routes>
  )

}

export default AppRouter
