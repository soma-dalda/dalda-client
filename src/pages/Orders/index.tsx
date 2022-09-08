import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderConfirm from './components/blocks/OrderConfirm'
import OrdersCompanyList from './components/blocks/OrdersCompanyList'
import OrdersConsumerList from './components/blocks/OrdersConsumerList'
import OrderSendMessage from './components/blocks/OrderSendMessage'
import Orders from './components/blocks/Orders'
import OrderResponse from './components/blocks/OrderResponse'

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

export default OrdersRoute
