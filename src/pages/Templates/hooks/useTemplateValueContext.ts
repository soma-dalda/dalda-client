import { useContext } from 'react'
import { TemplateValueContext } from '../context/TemplateContext'

const useTemplateValueContext = () => {
  return useContext(TemplateValueContext)
}

export default useTemplateValueContext
