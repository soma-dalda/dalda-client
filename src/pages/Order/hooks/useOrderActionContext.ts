import { useContext } from 'react'
import { OrderActionContext } from '../context/OrderContext'

const useOrderActionContext = () => {
  return useContext(OrderActionContext)
}

export default useOrderActionContext
