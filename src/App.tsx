import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Domain from './pages/Domain'
import Home from './pages/Home'
import EditForm from './pages/EditForm'
import { Layout } from './components'
import EditTemplate from './pages/EditTemplate'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout outlet />} path="/">
        <Route element={<Home />} path="" />
        <Route element={<EditForm />} path=":domain/edit" />
        <Route element={<EditTemplate />} path=":domain/template/:template" />
        <Route element={<Domain />} path=":domain" />
      </Route>
    </Routes>
  )
}

export default App
