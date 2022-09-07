import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderConfirm from './components/blocks/OrderConfirm'
import Orders from './components/blocks/Orders'
import OrderSendMessage from './components/blocks/OrderSendMessage'

const OrdersRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path=":id" element={<OrderConfirm />} />
      <Route path=":id/:status" element={<OrderSendMessage />} />
    </Routes>
  )
}

export default OrdersRoute
