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

  postRefresh: () => `/api/user-auth/refresh`,

  getCompany: ({ companyDomain }: GetCompanyParams) => `/api/home/user/company/${companyDomain}`,
  getCompanies: () => `/api/home/user/company/list`,

  getTemplates: ({ companyId }: { companyId?: string }) => `/api/templates/list/${companyId}`,
  getTemplateById: ({ templateId }: TemplateByIdParmas) => `/api/templates/${templateId}`,
  postTemplate: () => `/api/templates`,

  putTemplateById: ({ templateId }: TemplateByIdParmas) => `/api/templates/${templateId}`,

  getConsumerOrdersByUserId: () => `/api/orders/list/consumer`,
  getCompanyOrdersByUserId: () => `/api/orders/list/company`,
  getOrderByOrderId: ({ orderId }: OrderByOrderIdParmas) => `/api/orders/${orderId}`,

  postOrders: () => `/api/orders`,
  getLogin: ({ registrationId }: GetLoginParams) => `/oauth2/authorization/${registrationId}`,
  getUser: () => `/api/user`,
  postImage: () => `/api/image/upload`,

  getLogout: () => `/logout`,

  patchProfileImage: () => `/api/user/profile`,
}
