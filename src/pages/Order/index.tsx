import React from 'react'
import useError from '@/hooks/useError'
import useGetTemplate from '@/hooks/useGetTemplate'
import { Route, Routes, useParams } from 'react-router-dom'
import LoadingPage from '@/components/molecules/LoadingPage'
import Order from './components/blocks/Order'
import OrderInit from './components/blocks/OrderInit'

const OrderRoute = () => {
  const params = useParams()
  const { dispatchUpdateError } = useError()

  const { isLoading } = useGetTemplate(params.id ?? '', {
    onError: (error) => {
      dispatchUpdateError(error.response?.data.error.message)
    },
    enabled: Boolean(params.id),
  })

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <Routes>
      <Route path="" element={<OrderInit />} />
      <Route path="answer" element={<Order />} />
    </Routes>
  )
}

export default OrderRoute
