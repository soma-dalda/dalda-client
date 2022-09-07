import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '@jaewoong2/modal'
import Domain from './pages/Domain'
import Home from './pages/Home'
import Edit from './pages/Edit'
import ErrorPage from './pages/404'
import TemplatesRoute from './pages/Templates'
import Login from './pages/Login'
import OrderRoute from './pages/Order'
import Configuration from './pages/Configuration'

const App = () => {
  return (
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
        <Route element={<OrderRoute />} path=":domain/order/*" />
        <Route element={<Edit />} path=":domain/edit/*" />
        <Route element={<Edit />} path="/edit/*" />
      </Route>
      <Route element={<Configuration />} path="/configuration" />
      <Route element={<Login />} path="/login" />
      <Route element={<ErrorPage />} path="/error" />
    </Routes>
  )
}

export default App
