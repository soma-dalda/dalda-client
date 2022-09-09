import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '@jaewoong2/modal'
import { ToastProvider } from '@jaewoong2/toast'
import Domain from './pages/Domain'
import Home from './pages/Home'
import Edit from './pages/Edit'
import ErrorPage from './pages/404'
import TemplatesRoute from './pages/Templates'
import Login from './pages/Login'
import OrderRoute from './pages/Order'
import OrdersRoute from './pages/Orders'
import Configuration from './pages/Configuration'
import Logout from './pages/logout'

const App = () => {
  return (
    <ToastProvider>
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
          <Route element={<Edit />} path=":domain/edit/*" />
          <Route element={<Edit />} path="/edit/*" />
        </Route>
        <Route element={<OrdersRoute />} path="/orders/*" />
        <Route element={<Configuration />} path="/configuration" />
        <Route element={<Login />} path="/login/:sso" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<ErrorPage />} path="/error" />
      </Routes>
    </ToastProvider>
  )
}

export default App
