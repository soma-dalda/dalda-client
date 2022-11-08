import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HelmetState = {
  title: string
  description: string
  keywords: (string | null)[]
  thumbnail: string
  url: string
}

const initialState: HelmetState = {
  description: '특별한 날, 달다에서 특별한 케이크를 주문하세요',
  keywords: ['케이크', '주문제작케이크', '달다'],
  thumbnail:
    'https://user-images.githubusercontent.com/63512217/200489071-62175dd1-80b2-4755-bbfc-13a492560963.png',
  title: '달다',
  url: 'https://test.dalda.shop',
}

const helmetSlice = createSlice({
  name: 'helmet',
  initialState,
  reducers: {
    updateHelmet: (
      state,
      action: PayloadAction<{ [key in keyof HelmetState]?: HelmetState[key] | null }>
    ) => {
      if (action.payload.description) {
        state.description = action.payload.description
      }
      if (action.payload.title) {
        state.title = action.payload.title
      }
      if (action.payload.thumbnail) {
        state.thumbnail = action.payload.thumbnail
      }
      if (action.payload.keywords) {
        state.keywords = action.payload.keywords
      }
      if (action.payload.url) {
        state.url = action.payload.url
      }
    },
  },
})

export const { updateHelmet } = helmetSlice.actions

export default helmetSlice
