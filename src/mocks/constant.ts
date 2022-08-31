import { Company, Order, Template, User } from '@/type'

export const MOCK_HOURS = {
  월: {
    open: '',
    end: '',
  },
  화: {
    open: '',
    end: '',
  },
  수: {
    open: '',
    end: '',
  },
  목: {
    open: '',
    end: '',
  },
  금: {
    open: '',
    end: '',
  },
  토: {
    open: '',
    end: '',
  },
  일: {
    open: '',
    end: '',
  },
}

export const MOCK_TEMPLATE: Template = {
  id: '0',
  companyId: '1',
  title: '기본 주문서',
  content: [
    {
      type: 'option',
      detailType: 'singleObjective',
      question: '케이크 호수를 정해주세요.',
      images: [''],
      options: ['1호', '2호', 'e3호', '4호'],
    },
    {
      type: 'description',
      options: null,
      detailType: 'shortSubjective',
      question: '케이크 문구를 작성 해주세요.',
      images: [''],
    },
  ],
}

export const MOCK_USER: User = {
  id: '0',
  oAuthId: `0-kakao`,
  role: 'consumer',
  userName: 'dalda_offical',
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
  profileImage: '/src/assets/logo.png',
  companyDomain: 'test',
  instagramLink: 'https://instagram.com',
  qnaLink: 'https://open.kakao.com/o/gSgY8Ove',
  etcLinks: [{ 블로그: 'https://velog.io', 트위터: 'https://twitter.com' }],
  businessHours: MOCK_HOURS,
  companyLocation: '서울시 강남구 압구정동 120-2',
  companyPhone: '010-0000-1234',
  createdAt: new Date().toJSON(),
  latestAt: new Date().toJSON(),
  modifiedAt: new Date().toJSON(),
  oAuthId: 'kakao',
  role: 'company',
  userName: 'cake-dalda',
  userPhone: '010-0000-1234',
  withdraw: false,
  withdrawAt: new Date().toJSON(),
}

export const MOCK_ORDER: Order = {
  id: '',

  templateId: '',
  consumerId: '',
  companyId: '',

  imgUrl: '',
  templateResponse: {},
  orderDate: '',
  pickupDate: '',
  pickupNoticePhone: '',

  orderStatus: '접수 전',
  statusChangeDate: '',
}
