import { NavLink } from 'react-router-dom'

const SubNavbar = ({ links }) => {
  return (
    <nav className="navbar overflow-x-scroll no-scrollbar w-auto shadow-md sticky bg-white top-0 z-10">
      <ul className="navbar-center  flex lg:text-sm">
        {links.map((link) => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <NavLink
                className="capitalize ml-5 font-semibold focus:text-orange-400 "
                to={url}
              >
                {text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default SubNavbar
