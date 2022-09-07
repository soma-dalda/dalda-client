import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Templates from './components/pages/Templates'
import Template from './components/pages/Template'
import TemplateContextProvider from './context/TemplateContextProvider'

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
