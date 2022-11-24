import { ToggleTheme } from './'
import {Link} from 'react-router-dom'
import { lazy } from 'react'


const navNames = ["Home", "Blog", "Elements", "Portfolio"]

const Navbar = () => {
  return (
    <div>
      <ul>
        {navNames.map((item:any, index:number) => (
          <li>
            <Link key={index} to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <ToggleTheme />
    </div>
  )

}

export default Navbar
