import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import AuthLayout from '../shared/layouts/AuthLayout'
import MainLayout from '../shared/layouts/MainLayout'
import { lazy } from 'react'
import Home from '../pages/Home' // Not using lazy import for cases when a user is logged in
import NotFound404 from '../pages/NotFound404'
const Login = lazy(() => import('../pages/Login'))

const Router = () => {
  return (
    <Routes>
      {/* auth layout */}
      <Route element={<AuthLayout />}>
        <Route path={routes.default} element={<Login />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Login />} />
      </Route>
      {/* catch-all route for 404 - redirect to main page */}
      <Route path='*' element={<NotFound404 />} />
      {/* main layout */}
      <Route element={<MainLayout />}>
        <Route path={routes.main} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
