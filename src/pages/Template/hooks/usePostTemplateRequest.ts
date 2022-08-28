import { MOCK_TEMPLATE } from '@/mocks/constant'
import axios from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'

type Template = typeof MOCK_TEMPLATE

const postTemplatesRequest = async ({
  domain,
  template,
}: {
  domain: string
  template: typeof MOCK_TEMPLATE
}) => {
  const { data } = await axios.post<typeof MOCK_TEMPLATE>(`/${domain}/templates`, {
    ...template,
  })

  return data
}

type UseMutaionOption = Omit<
  UseMutationOptions<Template, unknown, { domain: string; template: Template }, unknown>,
  'mutationFn'
>

const usePostTemplateRequest = (options?: UseMutaionOption) => {
  return useMutation(postTemplatesRequest, {
    ...options,
  })
}

export default usePostTemplateRequest
