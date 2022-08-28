import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TemplateState } from '../types/index'
import { initalDescriptionQuestion, initalOptionQuestion, initialTemplate } from '../constant/index'

const initialState: TemplateState[] = []

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    getTemplates(_, { payload }: PayloadAction<TemplateState[]>) {
      return [...payload]
    },

    addTemplate(state, { payload }: PayloadAction<{ uuid: string }>) {
      state.push({ ...initialTemplate, id: payload.uuid })
    },

    deleteTemplate(state, { payload }: PayloadAction<{ id: string }>) {
      state.splice(
        state.findIndex((template) => template.id === payload.id),
        1
      )
    },

    updateTitle(state, action: PayloadAction<{ id: string; title: string }>) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.title = action.payload.title
      }
    },

    addQuestion(state, action: PayloadAction<{ id: string; type: 'option' | 'description' }>) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        if (action.payload.type === 'option') {
          template.content = [...template.content, initalOptionQuestion]
        }
        if (action.payload.type === 'description') {
          template.content = [...template.content, initalDescriptionQuestion]
        }
      }
    },

    deleteQuestion(state, action: PayloadAction<{ id: string; index: number }>) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.content = template.content.filter((_, i) => i !== action.payload.index)
      }
    },

    updateQuestionTitle(
      state,
      action: PayloadAction<{ id: string; index: number; title: string }>
    ) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.content[action.payload.index].question = action.payload.title
      }
    },

    addOption(state, action: PayloadAction<{ id: string; index: number }>) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options = [...content.options, '']
        }
      }
    },

    updateOptionByOptionIndex(
      state,
      action: PayloadAction<{
        id: string
        index: number
        optionIndex: number
        option: string
      }>
    ) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options[action.payload.optionIndex] = action.payload.option
        }
      }
    },

    deleteOptionByOptionIndex(
      state,
      action: PayloadAction<{ id: string; index: number; optionIndex: number }>
    ) {
      const template = state.find((value) => value.id === action.payload.id)

      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options = content.options.filter((_, i) => i !== action.payload.optionIndex)
        }
      }
    },

    updateDetailType(
      state,
      action: PayloadAction<{
        index: number
        id: string
        detailType: 'singleObjective' | 'multiObjective' | 'shortSubjective' | 'longSubjective'
      }>
    ) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.content[action.payload.index].detailType = action.payload.detailType
      }
    },
  },
})

export const {
  updateTitle,
  addQuestion,
  updateQuestionTitle,
  deleteQuestion,
  addOption,
  updateOptionByOptionIndex,
  updateDetailType,
  deleteTemplate,
  getTemplates,
  addTemplate,
  deleteOptionByOptionIndex,
} = templateSlice.actions

export default templateSlice
