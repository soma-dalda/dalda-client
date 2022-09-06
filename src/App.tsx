import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ModalProvider } from '@jaewoong2/modal'
import Domain from './pages/Domain'
import Home from './pages/Home'
import Edit from './pages/Edit'
import ErrorPage from './pages/404'
import LoadingPage from './components/molecules/LoadingPage'
import TemplatesRoute from './pages/Templates'

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
        <Route element={<Edit />} path=":domain/edit/*" />
        <Route element={<TemplatesRoute />} path=":domain/templates/*" />
      </Route>
      <Route element={<ErrorPage />} path="/error" />
      <Route element={<LoadingPage />} path="/loading" />
    </Routes>
  )
}

export default App
