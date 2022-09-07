import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './components/blocks/Order'

const OrderRoute = () => {
  return (
    <Routes>
      <Route path=":id" element={<Order />} />
    </Routes>
  )
}

export default OrderRoute
