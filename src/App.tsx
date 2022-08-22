import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Domain from './pages/Domain'
import Home from './pages/Home'
import Form from './pages/Form'
import { Layout } from './components'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout outlet />} path="/">
        <Route element={<Home />} path="" />
        <Route element={<Form />} path=":domain/form" />
        <Route element={<Domain />} path=":domain" />
      </Route>
    </Routes>
  )
}

export default App
