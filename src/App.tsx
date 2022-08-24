import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Domain from './pages/Domain'
import Home from './pages/Home'
import { Layout } from './components'
import EditFormLayout from './pages/EditForm/components/Layout'
import EditTemplate from './pages/EditTemplate'
import EditForm from './pages/EditForm'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout outlet />} path="/">
        <Route element={<Home />} path="" />
        <Route element={<EditFormLayout />} path="edit">
          <Route element={<EditForm />} path="" />
        </Route>
        <Route element={<EditTemplate />} path=":domain/template" />
        <Route element={<Domain />} path=":domain" />
      </Route>
    </Routes>
  )
}

export default App
