import React from 'react'
import CompanyEditContextProvider from './context/CompanyEditContextProvider'
import EditRoutes from './components/blocks/EditRoutes'

const Edit = () => {
  return (
    <CompanyEditContextProvider>
      <EditRoutes />
    </CompanyEditContextProvider>
  )
}

export default Edit
