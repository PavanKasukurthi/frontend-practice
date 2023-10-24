import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="px-20">
        <Outlet />
      </section>
      <hr />
      <Footer />
    </>
  )
}
export default HomeLayout
