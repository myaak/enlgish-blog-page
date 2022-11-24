import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from '../routes'

const AppRouter = () => {
  return(
      <Routes>
        {publicRoutes.map((item:any, index:number) => (
              <Route key={index} path={item.path} element={item.element}/>
        ))}
      </Routes>
  )

}

export default AppRouter
