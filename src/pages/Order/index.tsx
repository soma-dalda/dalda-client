import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Order from './components/blocks/Order'
import OrderInit from './components/blocks/OrderInit'
import OrderContextProvider from './context/OrderContextProvider'

const OrderRoute = () => {
  return (
    <OrderContextProvider>
      <Routes>
        <Route path="" element={<OrderInit />} />
        <Route path="answer" element={<Order />} />
      </Routes>
    </OrderContextProvider>
  )
}

export default OrderRoute
