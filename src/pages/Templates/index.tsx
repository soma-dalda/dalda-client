import withAuth from '@/components/hoc/withAuth'

import { ModalProvider } from '@jaewoong2/modal'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TemplateContextProvider from './context/TemplateContextProvider'

const Templates = React.lazy(() => import('./components/pages/Templates'))
const Template = React.lazy(() => import('./components/pages/Template'))

/** 유저 조회 -> 각 주문서에 대한 ID 값을 받아오기 */
const TemplatesRoute = () => {
  return (
    <ModalProvider>
      <TemplateContextProvider>
        <Routes>
          <Route path=":id" element={<Template />} />
          <Route path="post" element={<Template />} />
          <Route path="" element={<Templates />} />
        </Routes>
      </TemplateContextProvider>
    </ModalProvider>
  )
}

export default withAuth(TemplatesRoute)
