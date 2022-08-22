import { useContext } from 'react'
import { FormContextAPI } from '../context/FormContextProvider'

const useFormContext = () => {
  return useContext(FormContextAPI)
}

export default useFormContext
