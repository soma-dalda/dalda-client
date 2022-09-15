import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type StatusState = {
  code: string | number
  name: 'success' | 'error'
  message: string
}

const initialState: StatusState = {
  code: 0,
  name: 'success',
  message: '',
}

const statusSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    updateSuccess: (state, action: PayloadAction<{ code: string | number; message: string }>) => {
      state.name = 'success'
      state.code = action.payload.code
      if (action.payload.message) {
        state.message = action.payload.message
      } else {
        state.message = '성공'
      }
    },
    updateError: (state, action: PayloadAction<{ code: string | number; message: string }>) => {
      state.name = 'error'
      state.code = action.payload.code
      if (action.payload.message) {
        state.message = action.payload.message
      } else {
        state.message = '예기치 못한 오류'
      }
    },
  },
})

export const { updateError, updateSuccess } = statusSlice.actions

export default statusSlice
