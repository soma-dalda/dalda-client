import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './components/blocks/Order'
import OrderInit from './components/blocks/OrderInit'

const OrderRoute = () => {
  return (
    <Routes>
      <Route path="" element={<OrderInit />} />
      <Route path="answer" element={<Order />} />
    </Routes>
  )
}

export default OrderRoute
