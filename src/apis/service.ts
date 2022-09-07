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
  templateId?: string
  answers: string[]
}

export const postOrder = async (order: PostOrderAPIParmas) => {
  const data = await http.post(PATH.postOrders(), { ...order })
  return data
}

type PutUserAPIParams = {
  [key in keyof User]?: User[key]
}

type PatchUserAPIParmas = {
  username: string
  userPhone: string
}

export const patchUser = async (payload: PatchUserAPIParmas) => {
  const data = await http.patch(PATH.patchUser(), { ...payload })

  return data.data
}

export const patchCompany = async (user: PutUserAPIParams) => {
  const data = await http.patch(PATH.patchCompany(), { ...user })

  return data
}

export const getCompanies = async () => {
  const { data } = await http.get<Company[]>(PATH.getCompanies())

  return data
}

export const postTemplates = async (template: Template) => {
  const data = await http.post(PATH.postTemplate(), { ...template })

  return data
}

export const putTemplate = async (template: Template) => {
  const data = await http.put(PATH.putTemplateById({ templateId: template.id }), { ...template })

  return data
}

export const getUser = async () => {
  const data = await http.get<User>(PATH.getUser())

  return data.data
}

export const getLogin = async ({
  registrationId,
}: {
  registrationId?: 'kakao' | 'naver' | 'google'
}) => {
  const data = await http.get<User>(PATH.getLogin({ registrationId }))

  return data.data
}
