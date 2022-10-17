import { AxiosError } from 'axios'

export const MEMBER = 'MEMBER' as const
export const COMPANY = 'COMPANY' as const

export type Days = '월' | '화' | '수' | '목' | '금' | '토' | '일'
export type ROLE = typeof MEMBER | typeof COMPANY

export type User = {
  id: string
  oAuthId: string
  role: ROLE
  username: string
  userPhone: string
  companyName: string | null
  companyDomain: string | null
  companyLocation: string | null
  companyIntroduction: string | null
  businessHours:
    | {
        day: string
        start: string
        end: string
      }[]
    | null
  companyPhone: string | null
  // profileImage
  profileImage: string | null
  qnaLink: string | null
  instagramLink: string | null
  etcLinks:
    | {
        title: string
        link: string
      }[]
    | null
  createdAt: string
  modifiedAt: string
  latestAt: string
  withdraw: boolean
  withdrawAt: string
}

type QuestionType = 'singleObjective' | 'multiObjective'
type DescriptionType = 'subjective'

export type OptionQuestionType = QuestionType
export type DescriptionQuestionType = DescriptionType

export type OptionQuestion = {
  type: OptionQuestionType
  question: string
  img?: string
  options: string[]
}

export type DescriptionQuestion = {
  type: DescriptionQuestionType
  question: string
  img?: string
  options: null
}

export type Question = OptionQuestion | DescriptionQuestion

export type Template = {
  id: string
  userId: string
  title: string
  contentList: Question[]
  required?: boolean
}

export type Templates = {
  userId: string
  templateList: { id: string; title: string }[]
}

export type Order = {
  id?: string

  templateId?: string
  consumerId?: string
  companyId?: string

  image?: string
  templateResponses?: { question: string; answer: string[] }[]

  orderDate?: string
  pickupDate?: string
  pickupNoticePhone?: string

  orderStatus?: '접수 전' | '협의 중' | '가격 공지' | '제작 중' | '픽업 대기' | '픽업 완료' | '취소'
  statusChangeDate?: string
}

export type Company = User

export type RequestError = AxiosError<{ error: { message: string } }>
