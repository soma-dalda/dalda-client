type UserParams = {
  userId?: string
}

type GetCompanyParams = {
  companyDomain?: string
}

type TemplateByIdParmas = {
  templateId?: string
}

type OrderByOrderIdParmas = {
  orderId?: string
}

type GetLoginParams = {
  registrationId?: 'kakao' | 'naver' | 'google'
}

export const PATH = {
  patchUser: () => `/api/user`,
  patchCompany: () => `/api/user-company`,
  getCompany: ({ companyDomain }: GetCompanyParams) => `/api/${companyDomain}`,
  getCompanies: () => `/api/company`,

  getTemplates: ({ companyId }: { companyId?: string }) => `/api/templates/${companyId}/list`,
  getTemplateById: ({ templateId }: TemplateByIdParmas) => `/api/templates/${templateId}`,
  postTemplate: () => `/api/templates`,

  putTemplateById: ({ templateId }: TemplateByIdParmas) => `/api/templates/${templateId}`,

  getComsumerOrdersByUserId: ({ userId }: UserParams) => `/api/orders/list/consumer/${userId}`,
  getCompanyOrdersByUserId: ({ userId }: UserParams) => `/api/orders/list/company/${userId}`,
  getOrderByOrderId: ({ orderId }: OrderByOrderIdParmas) => `/api/orders/${orderId}`,

  postOrders: () => `/api/orders`,
  getLogin: ({ registrationId }: GetLoginParams) => `/oauth2/authorization/${registrationId}`,
  getUser: () => `/api/user`,
}
