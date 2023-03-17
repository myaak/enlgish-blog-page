import { RouteObject } from 'react-router-dom'
import {
  HOME_ROUTE, BLOG_ROUTE,
  ELEMENTS_ROUTE, PORTFOLIO_ROUTE,
  SIGNUP_ROUTE, LOGIN_ROUTE
} from './utils/consts'
import { Home, Blog, Elements, Portfolio, Login } from './screens'

export const publicRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Home />
  },
  {
    path: ELEMENTS_ROUTE,
    element: <Elements />
  },
  {
    path: PORTFOLIO_ROUTE,
    element: <Portfolio />
  }
]

