import withLogin from '@/components/hoc/withLogin'
import withPassword from '@/components/hoc/withPassword'
import { ModalProvider } from '@jaewoong2/modal'
import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Pickup from './components/blocks/Pickup'
import OrderContextProvider from './context/OrderContextProvider'

const Order = React.lazy(() => import('./components/blocks/Order'))
const OrderInit = React.lazy(() => import('./components/blocks/OrderInit'))

const OrderRoute = () => {
  return (
    <ModalProvider>
      <OrderContextProvider>
        <Routes>
          <Route path="" element={<OrderInit />} />
          <Route path="answer" element={<Order />} />
          <Route path="pickup" element={<Pickup />} />
        </Routes>
      </OrderContextProvider>
    </ModalProvider>
  )
}

export default withLogin(withPassword(OrderRoute))
