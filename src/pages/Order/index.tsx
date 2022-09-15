import LoadingPage from '@/components/molecules/LoadingPage'
import useGetTemplate from '@/hooks/useGetTemplate'
import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Order from './components/blocks/Order'
import OrderInit from './components/blocks/OrderInit'
import OrderContextProvider from './context/OrderContextProvider'
import useOrderActionContext from './hooks/useOrderActionContext'

const OrderRoute = () => {
  const { id } = useParams()
  const { setOrder } = useOrderActionContext()
  const { data: template, isLoading } = useGetTemplate(id ?? '', {
    onSuccess: (data) => {
      setOrder((prev) => ({
        ...prev,
        companyId: data.companyId,
        templateId: id,
        answers: Array(data?.content.length).fill(''),
      }))
    },
    enabled: Boolean(id),
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
  })

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <OrderContextProvider>
      <Routes>
        <Route path="" element={<OrderInit />} />
        <Route path="answer" element={<Order template={template} />} />
      </Routes>
    </OrderContextProvider>
  )
}

export default OrderRoute
