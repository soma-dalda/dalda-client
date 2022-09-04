import { Template } from '@/type'
import axios from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'

type PostTemplateRequest = {
  domain: string
  template: Template
}

const postTemplateRequest = async ({ domain, template }: PostTemplateRequest) => {
  const { data } = await axios.post<Template>(`/${domain}/templates`, {
    ...template,
  })

  return data
}

type UseMutaionOption = Omit<
  UseMutationOptions<Template, unknown, { domain: string; template: Template }, unknown>,
  'mutationFn'
>

const usePostTemplateRequest = (options?: UseMutaionOption) => {
  return useMutation(postTemplateRequest, {
    ...options,
  })
}

export default usePostTemplateRequest
