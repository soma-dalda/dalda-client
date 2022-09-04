import { useContext } from 'react'
import { CompanyEditValueContext } from '../context/CompanyEditContextProvider'

const useCompanyEditValue = () => {
  return useContext(CompanyEditValueContext)
}

export default useCompanyEditValue
