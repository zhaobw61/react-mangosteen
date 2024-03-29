import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome } from '../components/RedirectToWelcome'
import { Root } from '../components/Root'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'
import { Home } from '../pages/Home'
import { ItemPage } from '../pages/ItemPage'

export const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/home', element: <Home title='首页' /> },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    errorElement: <RedirectToWelcome />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> }
    ]
  },
  {
    path: '/items',
    element: <ItemPage />,
  }
])

