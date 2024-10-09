import { AdminLayout } from '@/layouts'
import { SigninPage, SignupPage } from '@/pages'
import HomePage from '@/pages/home/home-page'

import { createBrowserRouter } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [{ path: '/', element: <HomePage /> }]
  },
  {
    path: 'signin',
    element: <SigninPage />
  },
  {
    path: 'signup',
    element: <SignupPage />
  }
])
