import { AxiosError } from 'axios'
import { QuestionType } from '@/pages/Templates/constant'

export type Days = '월' | '화' | '수' | '목' | '금' | '토' | '일'

export type User = {
  id: string
  oAuthId: string
  role: 'company' | 'consumer'
  userName: string
  userPhone: string
  companyName: string | null
  companyDomain: string | null
  companyLocation: string | null
  companyIntroduction: string | null
  businessHours:
    | {
        [key in Days]: {
          open: string
          end: string
        }
      }
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

export type OptionQuestionType = typeof QuestionType.option
export type DescriptionQuestionType = typeof QuestionType.description

export type OptionQuestionDetailType =
  | typeof QuestionType.detail.singleSubjective
  | typeof QuestionType.detail.multiSubjectvie

export type DescriptionQuestionDetailType =
  | typeof QuestionType.detail.shortObjective
  | typeof QuestionType.detail.longObjective

export type OptionQuestion = {
  type: OptionQuestionType
  detailType: OptionQuestionDetailType
  question: string
  images?: string[]
  options: string[]
}

export type DescriptionQuestion = {
  type: DescriptionQuestionType
  detailType: DescriptionQuestionDetailType
  question: string
  images?: string[]
  options: null
}

export type Question = OptionQuestion | DescriptionQuestion

export type Template = {
  id: string
  companyId?: string
  title: string
  content: Question[]

  createdAt?: string
  modifiedAt?: string
}

export type Templates = Template[]

export type Order = {
  id?: string

  templateId?: string
  consumerId?: string
  companyId?: string

  imgUrl?: string
  templateResponse?: {
    [key: string]: string[]
  }
  orderDate?: string
  pickupDate?: string
  pickupNoticePhone?: string

  orderStatus?: '접수 전' | '협의 중' | '가격 공지' | '제작 중' | '픽업 대기' | '픽업 완료' | '취소'
  statusChangeDate?: string
}

export type Company = User

export type RequestError = AxiosError<{ error: { message: string } }>
