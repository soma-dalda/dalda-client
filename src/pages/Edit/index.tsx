import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CompanyEditContextProvider from './context/CompanyEditContextProvider'
import { EditProfile, EditDays } from './components'
import EditLayout from './components/blocks/EditLayout'

const Edit = () => {
  return (
    <CompanyEditContextProvider>
      <EditLayout>
        <Routes>
          <Route path="" element={<EditProfile />} />
          <Route path="days" element={<EditDays />} />
        </Routes>
      </EditLayout>
    </CompanyEditContextProvider>
  )
}

export default Edit
