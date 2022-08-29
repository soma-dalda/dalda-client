import { User, Templates, Order } from '@/type'
import { MOCK_COMPANY, MOCK_TEMPLATE, MOCK_USER } from './constant'

export const users: User[] = [MOCK_USER, MOCK_COMPANY]

export const templates: Templates = [{ ...MOCK_TEMPLATE, title: '특별 주문서' }, MOCK_TEMPLATE]

export const orders: Order[] = []
