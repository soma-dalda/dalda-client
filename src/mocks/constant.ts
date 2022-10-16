import { Company, Order, Template, User, COMPANY } from '@/type'

export const MOCK_HOURS = [
  { day: '월', start: '', end: '' },
  { day: '화', start: '', end: '' },
  { day: '수', start: '', end: '' },
  { day: '목', start: '', end: '' },
  { day: '금', start: '', end: '' },
  { day: '토', start: '', end: '' },
  { day: '일', start: '', end: '' },
]

export const MOCK_TEMPLATE: Template = {
  id: '0',
  userId: '1',
  title: '기본 주문서',
  required: true,
  content: [
    {
      type: 'singleObjective',
      question: '케이크 호수를 정해주세요.',
      img: 'https://i.ytimg.com/vi/g2sSCktflX8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsx_IEUNclI10YLIagy0rEXhQQHg',
      options: ['1호', '2호', '3호', '4호'],
    },
    {
      type: 'subjective',
      options: null,
      question: '케이크 문구를 작성 해주세요.',
      img: '',
    },
  ],
}

export const MOCK_USER: User = {
  id: '0',
  oAuthId: `0-kakao`,
  role: 'MEMBER',
  username: '',
  userPhone: '',
  companyName: '',
  companyDomain: '',
  companyLocation: '',
  companyIntroduction: '',
  businessHours: MOCK_HOURS,
  companyPhone: '',
  profileImage: '',
  qnaLink: '',
  instagramLink: '',
  etcLinks: [],
  createdAt: '',
  modifiedAt: '',
  latestAt: '',
  withdraw: false,
  withdrawAt: '',
}

export const MOCK_COMPANY: Company = {
  id: '1',
  companyName: '케이크-달다',
  companyIntroduction:
    'Make Your own Cake For Family, Friend, Co-workers Make Your own Cake For Family, Friend, Co-workers',
  profileImage: '/logo.png',
  companyDomain: 'test',
  instagramLink: 'https://instagram.com',
  qnaLink: 'https://open.kakao.com/o/gSgY8Ove',
  etcLinks: [
    { title: '블로그', link: 'https://velog.io' },
    { title: '트위터', link: 'https://twitter.com' },
  ],
  businessHours: MOCK_HOURS,
  companyLocation: '서울시 강남구 압구정동 120-2',
  companyPhone: '010-0000-1234',
  createdAt: new Date().toJSON(),
  latestAt: new Date().toJSON(),
  modifiedAt: new Date().toJSON(),
  oAuthId: 'kakao',
  role: COMPANY,
  username: 'cake-dalda',
  userPhone: '010-0000-1234',
  withdraw: false,
  withdrawAt: new Date().toJSON(),
}

export const MOCK_ORDER: Order = {
  id: '0',

  templateId: '0',
  consumerId: '2',
  companyId: '1',

  image:
    'https://i.ytimg.com/vi/g2sSCktflX8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsx_IEUNclI10YLIagy0rEXhQQHg',
  templateResponses: [
    { answer: ['2호'], question: '케이크 호수를 정해주세요.' },
    { answer: ['123456789'], question: '케이크 문구를 작성 해주세요.' },
  ],

  orderDate: '',
  pickupDate: '',
  pickupNoticePhone: '',

  orderStatus: '접수 전',
  statusChangeDate: '',
}
