import { useContext } from 'react'
import { OrderValueContext } from '../context/OrderContext'

const useOrderValueContext = () => {
  return useContext(OrderValueContext)
}

export default useOrderValueContext
