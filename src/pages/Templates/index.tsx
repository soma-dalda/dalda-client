import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TemplateContextProvider from './context/TemplateContextProvider'

const Template = React.lazy(() => import('./components/pages/Templates'))
const Templates = React.lazy(() => import('./components/pages/Template'))

/** 유저 조회 -> 각 주문서에 대한 ID 값을 받아오기 */
const TemplatesRoute = () => {
  return (
    <TemplateContextProvider>
      <Routes>
        <Route path=":id" element={<Template />} />
        <Route path="" element={<Templates />} />
      </Routes>
    </TemplateContextProvider>
  )
}

export default TemplatesRoute
