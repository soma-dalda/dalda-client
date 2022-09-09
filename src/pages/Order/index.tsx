import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './components/blocks/Order'
import OrderInit from './components/blocks/OrderInit'

const OrderRoute = () => {
  return (
    <Routes>
      <Route path=":id" element={<OrderInit />} />
      <Route path=":id/answer" element={<Order />} />
    </Routes>
  )
}

export default OrderRoute
