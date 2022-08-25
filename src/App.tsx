import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Domain from './pages/Domain'
import Home from './pages/Home'
import { Layout } from './components'
import EditFormLayout from './pages/EditForm/components/Layout'
import EditForm from './pages/EditForm'
import Template from './pages/Template'
import Templates from './pages/Templates'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout outlet />} path="/">
        <Route element={<Home />} path="" />
        <Route element={<EditFormLayout />} path="edit">
          <Route element={<EditForm />} path="" />
        </Route>
        <Route element={<Domain />} path=":domain" />
      </Route>
      <Route element={<Layout outlet navigateion={false} />} path="/">
        <Route element={<Templates />} path=":domain/templates" />
        <Route element={<Template />} path=":domain/templates/:id" />
      </Route>
    </Routes>
  )
}

export default App
