import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { About, Help, HomeLayout, Live, Note, Packs, Push, Shop } from './pages'
import { ErrorElement } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'live',
        element: <Live />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'push',
        element: <Push />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'note',
        element: <Note />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'link',
        element: <Link />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'packs',
        element: <Packs />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'help',
        element: <Help />,
        errorElement: <ErrorElement />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
