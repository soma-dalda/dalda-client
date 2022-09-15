import LoadingPage from '@/components/molecules/LoadingPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import useHandleEdit from '../../hooks/useHandleEdit'
import EditLayout from './EditLayout'

const EditProfile = React.lazy(() => import('./EditProfile'))
const EditDays = React.lazy(() => import('./EditDays'))

const EditRoutes = () => {
  const { handleSaveButtonClick, isLoading } = useHandleEdit()

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <EditLayout isLoading={isLoading}>
      <Routes>
        <Route path="" element={<EditProfile handleSaveButtonClick={handleSaveButtonClick} />} />
        <Route path="days" element={<EditDays handleSaveButtonClick={handleSaveButtonClick} />} />
      </Routes>
    </EditLayout>
  )
}

export default EditRoutes
