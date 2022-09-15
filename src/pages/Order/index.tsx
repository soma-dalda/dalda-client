import React from 'react'

import { Route, Routes } from 'react-router-dom'
import OrderContextProvider from './context/OrderContextProvider'

const Order = React.lazy(() => import('./components/blocks/Order'))
const OrderInit = React.lazy(() => import('./components/blocks/OrderInit'))

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
