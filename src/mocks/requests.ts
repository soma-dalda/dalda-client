import {
  DefaultBodyType,
  MockedResponse,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw'
import { COMPANY } from './constant'

type API = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => Promise<MockedResponse<DefaultBodyType>>

const getRandomId = () =>
  Math.floor(Math.random() * 12341312) * Math.floor(Math.random() * 12341312) -
  Math.floor(Math.random() * 12341312)

const mockCompanies: typeof COMPANY[] = []

export const login: API = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.delay(2000), ctx.cookie('access-token', 'access-token'))
}

export const getCompany: API = async (req, res, ctx) => {
  const { domain } = req.params
  if (typeof domain === 'string') {
    const data = mockCompanies.find((v) => v.domain === domain)

    if (data) {
      return res(ctx.status(200), ctx.delay(2000), ctx.json(data))
    }

    const company = {
      ...COMPANY,
      id: getRandomId().toString(),
      title: domain,
      domain,
    }

    mockCompanies.push(company)

    return res(ctx.status(200), ctx.delay(2000), ctx.json(company))
  }
  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '잘못된 요청 입니다' }))
}

export const getTemplates: API = async (req, res, ctx) => {
  const { domain } = req.params
  if (typeof domain === 'string') {
    const data = mockCompanies.find((v) => v.domain === domain)

    if (data) {
      return res(ctx.status(200), ctx.delay(2000), ctx.json(data.templates))
    }

    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ message: '존재하지 않는 업체 입니다.' })
    )
  }
  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '잘못된 요청 입니다' }))
}

export const postTemplate: API = async (req, res, ctx) => {
  const { domain } = req.params
  const newTemplate = await req.json()
  const templateId = newTemplate.id
  if (typeof domain === 'string') {
    const index = mockCompanies.findIndex((v) => v.domain === domain)

    if (index > -1) {
      const template = mockCompanies[index].templates.findIndex((v) => v.id === templateId)
      if (template > -1) {
        mockCompanies[index].templates[template] = newTemplate
        return res(ctx.status(200))
      }
      mockCompanies[index].templates.push(newTemplate)
      return res(ctx.status(200))
    }

    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ message: '존재하지 않는 업체 입니다.' })
    )
  }
  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '잘못된 요청 입니다' }))
}

export const getOrder: API = async (req, res, ctx) => {
  const { domain, id: templateId } = req.params
  if (typeof domain === 'string') {
    const index = mockCompanies.findIndex((v) => v.domain === domain)

    if (index > -1) {
      const template = mockCompanies[index].templates.find((v) => v.id === templateId)
      if (template) {
        return res(ctx.status(200), ctx.json(template))
      }

      return res(
        ctx.status(403),
        ctx.delay(2000),
        ctx.json({ message: '존재 하지 않는 주문서 입니다' })
      )
    }

    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ message: '존재하지 않는 업체 입니다.' })
    )
  }
  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '잘못된 요청 입니다' }))
}

export const postOrder: API = async (req, res, ctx) => {
  const { domain, id: templateId } = req.params
  const { answers, orderId } = await req.json()

  if (typeof domain === 'string') {
    const index = mockCompanies.findIndex((v) => v.domain === domain)

    if (index > -1) {
      if (typeof templateId === 'string') {
        mockCompanies[index].orders.push({
          id: orderId,
          answers,
          templateId,
        })
        return res(ctx.status(200))
      }

      return res(
        ctx.status(403),
        ctx.delay(2000),
        ctx.json({ message: '존재하지 않는 주문서 입니다.' })
      )
    }

    return res(
      ctx.status(403),
      ctx.delay(2000),
      ctx.json({ message: '존재하지 않는 업체 입니다.' })
    )
  }
  return res(ctx.status(403), ctx.delay(2000), ctx.json({ message: '잘못된 요청 입니다' }))
}
