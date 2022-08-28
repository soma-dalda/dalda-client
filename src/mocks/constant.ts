type Template = {
  id: string
  title: string
  content: (
    | {
        type: 'option'
        detailType: 'singleObjective' | 'multiObjective'
        question: string
        images?: string[]
        options: string[]
      }
    | {
        type: 'description'
        detailType: 'shortSubjective' | 'longSubjective'
        question: string
        images?: string[]
        options?: undefined
      }
  )[]
}

type Company = {
  id: string
  title: string
  description: string
  profileImg: string
  domain: string
  instagram: string
  openChat: string
  links: string
  infos: never[]
  orders: {
    id: string
    templateId: string
    answers: []
  }[]
  templates: Template[]
}

export const MOCK_TEMPLATE: Template = {
  id: '0',
  title: '기본 주문서',
  content: [
    {
      type: 'option',
      detailType: 'singleObjective',
      question: '케이크 호수를 정해주세요.',
      images: [''],
      options: ['1호', '2호', '3호', '4호'],
    },
    {
      type: 'description',
      detailType: 'shortSubjective',
      question: '케이크 문구를 작성 해주세요.',
      images: [''],
    },
  ],
}

export const COMPANY: Company = {
  id: '0',
  title: '케이크-달다',
  description: '',
  profileImg: '/src/assets/logo.png',
  domain: '',
  instagram: 'https://instagram.com',
  openChat: '',
  links: '',
  infos: [],
  orders: [],
  templates: [
    { ...MOCK_TEMPLATE, title: '기본 주문 제작 폼', id: '0' },
    { ...MOCK_TEMPLATE, title: '특별 주문 제작 폼', id: '1' },
  ],
}
