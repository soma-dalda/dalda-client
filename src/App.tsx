import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Domain from './pages/Domain'
import Home from './pages/Home'
import { Layout } from './components'
import Edit from './pages/Edit'
import Template from './pages/Template'
import Templates from './pages/Templates'
import Order from './pages/Order'
import TemplatesSkeleton from './pages/Template/components/TemplatesSkeleton'
import ErrorPage from './pages/404'
import LoadingPage from './components/LoadingPage'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout outlet />} path="/">
        <Route element={<Home />} path="" />
      </Route>
      <Route element={<Layout outlet navigateion={false} />} path="/">
        <Route element={<Order />} path=":domain/order/:id" />
        <Route
          element={
            <Suspense fallback={<TemplatesSkeleton />}>
              <Templates />
            </Suspense>
          }
          path=":domain/templates"
        />
        <Route element={<Template />} path=":domain/templates/:id" />
      </Route>
      <Route path="">
        <Route element={<Domain />} path=":domain" />
        <Route element={<Edit />} path=":domain/edit/*" />
      </Route>
      <Route element={<ErrorPage />} path="/error" />
      <Route element={<LoadingPage />} path="/loading" />
    </Routes>
  )
}

export default App
