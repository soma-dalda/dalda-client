import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { error: { message?: string } } = {
  error: {
    message: '예기치 못한 오류',
  },
}
const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    updateError: (state, action: PayloadAction<{ error?: { message?: string } }>) => {
      if (action.payload.error) {
        state.error.message = action.payload.error.message
      } else {
        state.error.message = '예기치 못한 오류'
      }
    },
  },
})

export const { updateError } = errorSlice.actions

export default errorSlice
