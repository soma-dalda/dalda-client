import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '@jaewoong2/modal'
import { ToastProvider } from '@jaewoong2/toast'
import LoadingPage from './components/molecules/LoadingPage'
import MetaTag from './components/blocks/MetaTag'

const Home = React.lazy(() => import('./pages/Home'))
const EditRoute = React.lazy(() => import('./pages/Edit'))
const Domain = React.lazy(() => import('./pages/Domain'))
const TemplatesRoute = React.lazy(() => import('./pages/Templates'))
const LoginRoute = React.lazy(() => import('./pages/Login'))
const LoginSSO = React.lazy(() => import('./pages/Login/LoginSSO'))
const OrderRoute = React.lazy(() => import('./pages/Order'))
const OrdersRoute = React.lazy(() => import('./pages/Orders'))
const Configuration = React.lazy(() => import('./pages/Configuration'))
const Logout = React.lazy(() => import('./pages/logout'))
const ErrorPage = React.lazy(() => import('./pages/404'))

const App = () => {
  return (
    <ToastProvider>
      <MetaTag />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="">
            <Route element={<Home />} path="" />
            <Route
              element={
                <ModalProvider>
                  <Domain />
                </ModalProvider>
              }
              path=":domain"
            />
            <Route element={<TemplatesRoute />} path=":domain/templates/*" />
            <Route element={<OrderRoute />} path=":domain/order/:id/*" />
            <Route element={<EditRoute />} path=":domain/edit/*" />
            <Route element={<EditRoute />} path="/edit/*" />
          </Route>
          <Route element={<OrdersRoute />} path="/orders/*" />
          <Route element={<Configuration />} path="/configuration" />
          <Route element={<LoginRoute />} path="/login" />
          <Route element={<LoginSSO />} path="/login/:sso" />
          <Route element={<Logout />} path="/logout" />
          <Route element={<ErrorPage />} path="/error" />
        </Routes>
      </Suspense>
    </ToastProvider>
  )
}

export default App
