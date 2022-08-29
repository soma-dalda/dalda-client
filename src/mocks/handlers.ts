import { rest } from 'msw'
import {
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
  putUserById,
} from './requests'

export const handlers = [
  rest.get('/oauth2/authorization/:registrationId', login),
  rest.get('/api/user', getUser),
  rest.put('/api/user/:userId', putUserById),

  rest.get('/:companyDomain', getCompany),

  rest.get('/api/templates/all/:companyId', getTemplates),

  rest.get('/api/templates/:templateId', getTemplate),
  rest.post('/api/templates', postTemplate),
  rest.put('/api/templates/:templateId', putTemplateById),

  rest.get('/api/orders/list/consumer/:userId', getCompanyOrdersByUserId),
  rest.get('/api/orders/list/company/:userId', getConsumerOrdersByUserId),

  rest.get('/api/orders/:orderId', getOrderByOrderId),

  rest.post('/api/orders', postOrders),
]
