import { useContext } from 'react'
import { TemplateActionContext } from '../context/TemplateContext'

const useTemplateActionContext = () => {
  return useContext(TemplateActionContext)
}

export default useTemplateActionContext
