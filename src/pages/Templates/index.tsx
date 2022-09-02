import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Template from '@/pages/Template'
import Templates from './components/blocks/Templates'

/** 유저 조회 -> 각 주문서에 대한 ID 값을 받아오기 */
const TemplatesRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Templates />} />
      <Route path="/:id" element={<Template />} />
    </Routes>
  )
}

export default TemplatesRoute
