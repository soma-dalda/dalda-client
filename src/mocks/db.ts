import { User, Template, Order, Templates } from '@/type'
import { MOCK_COMPANY, MOCK_ORDER, MOCK_TEMPLATE, MOCK_USER } from './constant'
import { generatorUId } from './utils'

const oneId = generatorUId()
const twoId = generatorUId()

export const users: User[] = [MOCK_USER, MOCK_COMPANY]

export const templatesList: Templates[] = [
  {
    userId: '1',
    templateList: [
      { id: '0', title: '기본 주문서' },
      { title: '특별 주문서 ', id: oneId },
      { title: '기본 주문서 ', id: twoId },
    ],
  },
]

export const templates: Template[] = [
  { ...MOCK_TEMPLATE, title: '특별 주문서', id: oneId },
  { ...MOCK_TEMPLATE },
  { ...MOCK_TEMPLATE, id: twoId },
]

export const orders: Order[] = [{ ...MOCK_ORDER }]
