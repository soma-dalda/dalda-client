import { rest } from 'msw'
import {
  getCompanies,
  getCompany,
  getCompanyOrdersByUserId,
  getConsumerOrdersByUserId,
  getOrderByOrderId,
  getTemplate,
  getTemplates,
  getUser,
  login,
  postOrders,
  postTemplate,
  putTemplateById,
  patchCompany,
  patchUser,
  postImage,
  getOrders,
  getLogout,
} from './requests'

export const handlers = [
  rest.get('/oauth2/authorization/:registrationId', login),
  rest.get('/api/user', getUser),
  rest.patch('/api/user', patchUser),
  rest.patch('/api/user-company', patchCompany),

  rest.get('/api/home/user/company/list', getCompanies),
  rest.get('/api/home/user/company/:companyDomain', getCompany),

  rest.get('/api/templates/list/:companyId', getTemplates),

  rest.get('/api/templates/:templateId', getTemplate),
  rest.post('/api/templates', postTemplate),
  rest.put('/api/templates/:templateId', putTemplateById),

  rest.get('/api/orders/list/consumer', getConsumerOrdersByUserId),
  rest.get('/api/orders/list/company', getCompanyOrdersByUserId),

  rest.get('/api/orders/:orderId', getOrderByOrderId),

  rest.post('/api/orders', postOrders),
  rest.get('/api/orders/length', getOrders),
  rest.get('/logout', getLogout),
  rest.post('/api/image/upload', postImage),
]
