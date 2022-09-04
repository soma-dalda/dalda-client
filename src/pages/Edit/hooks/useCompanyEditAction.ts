import { useContext } from 'react'
import { CompanyEditActionContext } from '../context/CompanyEditContextProvider'

const useCompanyEditAction = () => {
  return useContext(CompanyEditActionContext)
}

export default useCompanyEditAction
