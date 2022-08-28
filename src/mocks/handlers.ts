import { rest } from 'msw'
import { getCompany, getOrder, getTemplates, login, postTemplate, postOrder } from './requests'

export const handlers = [
  rest.post('/login', login),
  rest.get('/:domain', getCompany),
  rest.get('/:domain/templates', getTemplates),
  rest.post('/:domain/templates', postTemplate),
  rest.get('/:domain/order/:id', getOrder),
  rest.post('/:domain/order/:id', postOrder),
]
