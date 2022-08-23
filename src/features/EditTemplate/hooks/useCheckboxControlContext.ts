import { useContext } from 'react'
import { CheckboxControl } from '../context/CheckboxControlProvider'

const useCheckboxControlContext = () => {
  return useContext(CheckboxControl)
}

export default useCheckboxControlContext
