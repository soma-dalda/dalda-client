import { Template, Company, Templates, User } from '@/type'
import { http } from './https'
import { PATH } from './paths'

// 입력, 출력에 대한 Type 추론

type GetCompanyAPIParmas = {
  companyDomain?: string
}

export const getCompany = async ({ companyDomain }: GetCompanyAPIParmas) => {
  const data = await http.get<Company>(PATH.getCompany({ companyDomain }))
  return data.data
}

type GetTemplatesAPIParmas = {
  companyId?: string
}

export const getTemplates = async ({ companyId }: GetTemplatesAPIParmas) => {
  const { data } = await http.get<Templates>(PATH.getTemplates({ companyId }))

  return data
}

type GetTemplateAPIParmas = {
  templateId?: string
}
export const getTemplate = async ({ templateId }: GetTemplateAPIParmas) => {
  const { data } = await http.get<Template>(PATH.getTemplateById({ templateId }))

  return data
}

type PostOrderAPIParmas = {
  domain?: string
  templateId?: string
  orderId: string | undefined
  answers: string[]
}

export const postOrder = async (order: PostOrderAPIParmas) => {
  const data = await http.post(PATH.postOrders(), { ...order })
  return data
}

type PutUserAPIParams = {
  [key in keyof User]?: User[key]
}

export const putUser = async (user: PutUserAPIParams) => {
  const data = await http.put(PATH.putUser({ userId: user.id }), { ...user })

  return data
}
