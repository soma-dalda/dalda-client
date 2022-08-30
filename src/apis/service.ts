import { Template, Company, Templates } from '@/type'
import { http } from './https'
import { PATH } from './paths'

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
