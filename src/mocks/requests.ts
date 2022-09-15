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
) => Promise<MockedResponse<DefaultBodyType> | void>

export const login: API = async (req, res, ctx) => {
  const { registrationId } = req.params
  const token = req.headers.get('Authorization')?.split('Bearer')[1].trim()
  if (typeof registrationId === 'string') {
    if (registrationId === 'naver') {
      return res(ctx.status(401))
    }
  }
  if (token) {
    const user = db.users.find((u) => u.id === token)

    if (user) {
      return res(ctx.status(200), ctx.cookie('access-token', token), ctx.json(user))
    }
  }

  const uid = generatorUId()

  if (uid) {
    const newUser = { ...MOCK_USER, id: uid, oAuthId: '', userName: '' }
    db.users.push(newUser)

    return res(ctx.status(200), ctx.cookie('access-token', uid), ctx.json(newUser))
  }

  return res(ctx.status(403), ctx.json({ error: { message: 'Error! From Login' } }))
}

export const getUser: API = async (req, res, ctx) => {
  const token = req.headers.get('Authorization')?.split('Bearer')[1].trim()
  if (token) {
    const user = db.users.find((u) => u.id === token)

    if (user) {
      return res(ctx.status(200), ctx.cookie('access-token', token), ctx.json(user))
    }

    return res(ctx.status(401), ctx.json({ error: { message: '잘못된 Id' } }))
  }

  return res(ctx.status(401), ctx.json({ error: { message: 'Error From Un Authorization Token' } }))
}

export const getCompanies: API = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(db.users.filter((user) => user.role === 'company')))
}

export const patchCompany: API = async (req, res, ctx) => {
  const user = await req.json<User>()

  if (user) {
    const index = db.users.findIndex((u) => u.id === user.id)
    if (index > -1) {
      const indexByDomain = db.users.findIndex((u) => u.companyDomain === user.companyDomain)
      if (indexByDomain > -1) {
        if (indexByDomain !== index) {
          return res(ctx.status(403), ctx.json({ error: { message: '동일 도메인' } }))
        }
      }
      user.role = 'company'
      db.users[index] = {
        ...db.users[index],
        ...user,
      }

      return res(ctx.status(200), ctx.delay(1200), ctx.json(db.users[index]))
    }
    return res(ctx.status(401), ctx.json({ error: { message: '잘못된 유저 아이디' } }))
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

    // return res.networkError('Error Not find company')

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
    const data = db.templates.filter((v) => v.id === templateId)[0]

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
    db.templates.push({ ...newTemplate, id: generatorUId() })
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
  const id = req.headers.get('authorization')?.split('Bearer')[1].trim()
  if (!id) {
    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ error: { message: '로그인이 필수 입니다' } })
    )
  }

  const userIndex = db.users.findIndex((u) => u.id === id)
  const template = db.templates.findIndex((t) => t.id === newOrder?.templateId)

  if (!db.users[userIndex]) {
    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ error: { message: '존재하지 않는 유저 입니다' } })
    )
  }

  if (newOrder) {
    db.orders.push({
      ...newOrder,
      id: generatorUId(),
      companyId: db.templates[template].companyId,
      consumerId: db.users[userIndex].id,
    })
    return res(ctx.status(200))
  }

  return res(
    ctx.status(403),
    ctx.delay(2000),
    ctx.json({ error: { message: '존재하지 않는 업체 입니다.' } })
  )
}

export const patchUser: API = async (req, res, ctx) => {
  const data = await req.json<{ username: string; userPhone: string } | null>()
  const id = req.headers.get('authorization')?.split('Bearer')[1].trim()

  const userIndex = db.users.findIndex((u) => u.id === id)

  if (userIndex > -1) {
    if (data) {
      db.users[userIndex] = {
        ...db.users[userIndex],
        username: data.username,
        userPhone: data.userPhone,
      }
      return res(ctx.status(200), ctx.delay(2000))
    }
    return res(ctx.status(404), ctx.json({ error: { message: '존재하지 데이터' } }))
  }
  return res(ctx.status(403), ctx.json({ error: { message: '존재하지 유저' } }))
}

export const getOrders: API = async (req, res, ctx) => {
  const id = req.headers.get('authorization')?.split('Bearer')[1].trim()

  const userIndex = db.users.findIndex((u) => u.id === id)
  const data = db.orders.filter((order) => {
    return order.companyId === id || order.consumerId === id
  })

  if (userIndex > -1) {
    if (data) {
      return res(ctx.status(200), ctx.delay(2000), ctx.json({ length: data.length }))
    }
    return res(ctx.status(404), ctx.json({ error: { message: '존재하지 데이터' } }))
  }
  return res(ctx.status(403), ctx.json({ error: { message: '존재하지 유저' } }))
}

export const postImage: API = async (_, res, ctx) => {
  // const data = await req.arrayBuffer()
  // const reader = new FileReader()

  // if (data) {
  //   return res(ctx.status(200), ctx.json(data))
  // }
  return res(ctx.status(200), ctx.delay(2400), ctx.json({ url: '성공' }))
}
