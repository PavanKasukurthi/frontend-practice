import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className="navbar px-4 border-b-2 z-20">
      <div className="navbar-start gap-x-4 " style={{ width: '3rem' }}>
        <Link to="/">
          <svg
            aria-hidden="true"
            focusable="false"
            className="main-nav__logo__image cursor-pointer min-h-16 min-w-16"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="21"
            viewBox="0 0 45 21"
          >
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
        </Link>
      </div>
      <div className="navbar-start hidden lg:flex">
        <NavLinks />
      </div>

      <div>
        <label className="btn btn-ghost lg:hidden flex flex-initial">
          Menu
        </label>
      </div>

      <div className="navbar-end gap-x-3 hidden lg:flex">
        <Link to="/" className="text-cyan-600">
          Try Live for free
        </Link>
        <Link to="/">Login or Register</Link>
      </div>
    </nav>
  )
}
export default Navbar
