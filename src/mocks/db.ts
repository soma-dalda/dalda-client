import { User, Templates, Order } from '@/type'
import { MOCK_COMPANY, MOCK_TEMPLATE, MOCK_USER } from './constant'
import { generatorUId } from './utils'

export const users: User[] = [MOCK_USER, MOCK_COMPANY]

export const templates: Templates = [
  { ...MOCK_TEMPLATE, title: '특별 주문서', id: generatorUId() },
  { ...MOCK_TEMPLATE, id: generatorUId() },
]

export const orders: Order[] = []
