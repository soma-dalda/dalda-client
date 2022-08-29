import { Order, Template, User } from '@/type'
import {
  DefaultBodyType,
  MockedResponse,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw'
import { MOCK_USER } from './constant'
import * as db from './db'
import { generatorUId } from './utils'

type API = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => Promise<MockedResponse<DefaultBodyType>>

export const login: API = async (req, res, ctx) => {
  const token = req.headers.get('Authorization')

  if (token) {
    const user = db.users.find((u) => u.id === token)

    if (user) {
      return res(ctx.status(200), ctx.cookie('access-token', token), ctx.json(user))
    }
    return res(ctx.status(200), ctx.json({ error: { message: '잘못된 Id' } }))
  }

  const uid = generatorUId()

  if (uid) {
    const newUser = { ...MOCK_USER, id: generatorUId(), oAuthId: '', userName: '' }
    db.users.push(newUser)

    return res(ctx.status(200), ctx.cookie('access-token', uid), ctx.json(newUser))
  }

  return res(ctx.status(403), ctx.json({ error: { message: 'Error! From Login' } }))
}

export const getUser: API = async (req, res, ctx) => {
  const token = req.headers.get('Authorization')

  if (token) {
    const user = db.users.find((u) => u.id === token)

    if (user) {
      return res(ctx.status(200), ctx.cookie('access-token', token), ctx.json(user))
    }
    return res(ctx.status(200), ctx.json({ error: { message: '잘못된 Id' } }))
  }

  return res(ctx.status(403), ctx.json({ error: { message: 'Error From Un Authorization Token' } }))
}

export const putUserById: API = async (req, res, ctx) => {
  const { userId } = req.params
  const user = await req.json<User>()

  if (user) {
    const index = db.users.findIndex((u) => u.id === userId)
    if (index > -1) {
      user.role = 'company'
      db.users[index] = user
      return res(ctx.status(200))
    }
    return res(ctx.status(403), ctx.json({ error: { message: '잘못된 유저 아이디' } }))
  }

  return res(ctx.status(403), ctx.json({ error: { message: '잘못된 요청' } }))
}

export const getCompany: API = async (req, res, ctx) => {
  const { companyDomain } = req.params

  if (typeof companyDomain === 'string') {
    const data = db.users.find((v) => v.companyDomain === companyDomain)

    if (data) {
      return res(ctx.status(200), ctx.json(data))
    }

    return res(ctx.status(403), ctx.json({ error: { message: 'Error Not find company' } }))
  }

  return res(
    ctx.status(403),
    ctx.delay(2000),
    ctx.json({ error: { message: '잘못된 도메인 요청 입니다' } })
  )
}

export const getTemplates: API = async (req, res, ctx) => {
  const { companyId } = req.params

  if (typeof companyId === 'string') {
    const data = db.templates.filter((v) => v.companyId === companyId)

    if (data) {
      return res(ctx.status(200), ctx.json(data))
    }

    return res(ctx.status(403), ctx.json({ error: { message: 'Error Not find templates' } }))
  }

  return res(ctx.status(403), ctx.json({ error: { message: 'Error From companyId' } }))
}

export const getTemplate: API = async (req, res, ctx) => {
  const { templateId } = req.params
  if (typeof templateId === 'string') {
    const data = db.templates.filter((v) => v.id === templateId)

    if (data) {
      return res(ctx.status(200), ctx.delay(2000), ctx.json(data))
    }

    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ error: { message: '존재하지 않는 주문 폼 입니다.' } })
    )
  }
  return res(
    ctx.status(403),
    ctx.delay(2000),
    ctx.json({ error: { message: '잘못된 요청 입니다' } })
  )
}

export const postTemplate: API = async (req, res, ctx) => {
  const newTemplate = await req.json<Template | null>()

  if (newTemplate) {
    db.templates.push(newTemplate)
    return res(ctx.status(200))
  }

  return res(ctx.status(403), ctx.json({ error: { message: '잘못된 요청 입니다' } }))
}

export const putTemplateById: API = async (req, res, ctx) => {
  const { templateId } = req.params
  const newTemplate = await req.json<Template | null>()

  if (typeof templateId === 'string') {
    const index = db.templates.findIndex((template) => template.id === templateId)

    if (newTemplate) {
      db.templates[index] = newTemplate
      return res(ctx.status(200))
    }

    return res(ctx.status(403), ctx.json({ error: { message: '존재하지 않는 템플릿 ID 입니다' } }))
  }

  return res(ctx.status(403), ctx.json({ error: { message: '잘못된 요청 입니다' } }))
}

export const getConsumerOrdersByUserId: API = async (req, res, ctx) => {
  const { userId } = req.params

  if (typeof userId === 'string') {
    const orders = db.orders.filter((v) => v.consumerId === userId)

    if (orders) {
      return res(ctx.status(200), ctx.json(orders))
    }

    return res(ctx.status(403), ctx.json({ error: { message: '존재하지 않는 주문서 입니다.' } }))
  }

  return res(
    ctx.status(403),
    ctx.delay(2000),
    ctx.json({ message: '존재하지않는 유저 아이디 입니다' })
  )
}

export const getCompanyOrdersByUserId: API = async (req, res, ctx) => {
  const { userId } = req.params

  if (typeof userId === 'string') {
    const orders = db.orders.filter((v) => v.companyId === userId)

    if (orders) {
      return res(ctx.status(200), ctx.json(orders))
    }

    return res(ctx.status(403), ctx.json({ error: { message: '존재하지 않는 주문서 입니다.' } }))
  }

  return res(
    ctx.status(403),
    ctx.delay(2000),
    ctx.json({ error: { message: '존재 하지 않는 유저 아이디 입니다' } })
  )
}

export const getOrderByOrderId: API = async (req, res, ctx) => {
  const { orderId } = req.params

  if (typeof orderId === 'string') {
    const order = db.orders.find((v) => v.id === orderId)

    if (order) {
      return res(ctx.status(200), ctx.json(order))
    }

    return res(ctx.status(403), ctx.json({ error: { message: '존재 하지 않는 주문서 입니다' } }))
  }

  return res(ctx.status(403), ctx.json({ error: { message: '잘못된 요청 입니다' } }))
}

export const postOrders: API = async (req, res, ctx) => {
  const newOrder = await req.json<Order | null>()

  if (newOrder) {
    db.orders.push(newOrder)

    return res(ctx.status(200))
  }

  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '존재하지 않는 업체 입니다.' }))
}
