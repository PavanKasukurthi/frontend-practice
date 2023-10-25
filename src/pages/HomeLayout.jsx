import { Outlet } from 'react-router-dom'
import { Footer, Navbar, SubNavbar } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <hr />
      <Footer />
    </>
  )
}
export default HomeLayout
