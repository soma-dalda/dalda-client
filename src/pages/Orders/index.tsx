import withPassword from '@/components/hoc/withPassword'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const OrderConfirm = React.lazy(() => import('./components/blocks/OrderConfirm'))
const OrdersCompanyList = React.lazy(() => import('./components/blocks/OrdersCompanyList'))
const OrdersConsumerList = React.lazy(() => import('./components/blocks/OrdersConsumerList'))
const OrderSendMessage = React.lazy(() => import('./components/blocks/OrderSendMessage'))
const Orders = React.lazy(() => import('./components/blocks/Orders'))
const OrderResponse = React.lazy(() => import('./components/blocks/OrderResponse'))

const OrdersRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Orders />}>
        <Route path="company" element={<OrdersCompanyList />} />
        <Route path="consumer" element={<OrdersConsumerList />} />
      </Route>
      <Route path="company/:id" element={<OrderConfirm />} />
      <Route path="company/:id/:status" element={<OrderSendMessage />} />
      <Route path="consumer/:id" element={<OrderResponse />} />
    </Routes>
  )
}

export default withPassword(OrdersRoute)
