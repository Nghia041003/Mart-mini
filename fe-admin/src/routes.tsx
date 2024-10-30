import { Navigate, createBrowserRouter } from 'react-router-dom'

import AdminLayout from './Layout/AdminLayout'

import { pathRouter } from './constants/pathRouter'
import Detail from './pages/ManageOrder/OrderDetail'

import ListOrder from './pages/ManageOrder/ListOrder'

import SignIn from './pages/SignIn/SignIn'
import Signup from './pages/SignUp/Signup'
import NotFound from '@/pages/NotFound/NotFound'

const isAuthenticated = (): boolean => {
  const userString = localStorage.getItem('user')
  const user = userString ? JSON.parse(userString) : {}
  const allowedRoles = ['admin', 'nhân viên', 'quản lý'] // Danh sách các vai trò được phép truy cập
  return user && allowedRoles.includes(user?.role?.role_name)
}

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to='/' />
}

export const routers = createBrowserRouter([
  {
    path: pathRouter.signin,
    element: <SignIn />
  },
  {
    path: pathRouter.signup,
    element: <Signup />
  },

  {
    path: pathRouter.admin,
    element: <PrivateRoute element={<AdminLayout />} />,
    children: [
      {
        path: pathRouter.manageOrder,
        element: <ListOrder />
      },
      {
        path: pathRouter.manageOrderDetail,
        element: <Detail />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
