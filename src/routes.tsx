import { RouteObject } from 'react-router-dom'
import {
  HOME_ROUTE, BLOG_ROUTE,
  ELEMENTS_ROUTE, PORTFOLIO_ROUTE
} from './utils/consts'
import { Home, Blog, Elements, Portfolio } from './screens'

export const publicRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Home />
  },
  {
    path: BLOG_ROUTE,
    element: <Blog />
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

