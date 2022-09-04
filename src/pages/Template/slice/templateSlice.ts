import { Templates, Question } from '@/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initalDescriptionQuestion, initalOptionQuestion, initialTemplate } from '../constant/index'

const initialState: Templates = []

type AddTemplatePayloadAction = PayloadAction<{ uuid: string }>
type DeleteTemplatePayloadACtion = PayloadAction<{ id: string }>
type UpdateTemplateTitlePayloadAction = PayloadAction<{ id: string; title: string }>
type AddQuestionPayloadAction = PayloadAction<{ id: string; type: Question['type'] }>
type DeleteQuestionPayloadAction = PayloadAction<{ id: string; index: number }>
type UpdateQuestionTitlePayloadAction = PayloadAction<{ id: string; index: number; title: string }>
type AddOptionPayloadAction = PayloadAction<{ id: string; index: number }>
type UpdateOptionByOptionIdPayloadAction = PayloadAction<{
  id: string
  index: number
  optionIndex: number
  option: string
}>
type DeleteOptionByOptionIdPayloadAction = PayloadAction<{
  id: string
  index: number
  optionIndex: number
}>
type UpdateDetailTypePayloadAction = PayloadAction<{
  index: number
  id: string
  detailType: 'singleObjective' | 'multiObjective' | 'shortSubjective' | 'longSubjective'
}>

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplates(_, { payload }: PayloadAction<Templates>) {
      return [...payload]
    },

    addTemplate(state, { payload }: AddTemplatePayloadAction) {
      state.push({ ...initialTemplate, id: payload.uuid })
    },

    deleteTemplate(state, { payload }: DeleteTemplatePayloadACtion) {
      state.splice(
        state.findIndex((template) => template.id === payload.id),
        1
      )
    },

    updateTitle(state, action: UpdateTemplateTitlePayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.title = action.payload.title
      }
    },

    addQuestion(state, action: AddQuestionPayloadAction) {
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

    deleteQuestion(state, action: DeleteQuestionPayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.content = template.content.filter((_, i) => i !== action.payload.index)
      }
    },

    updateQuestionTitle(state, action: UpdateQuestionTitlePayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        template.content[action.payload.index].question = action.payload.title
      }
    },

    addOption(state, action: AddOptionPayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options = [...content.options, '']
        }
      }
    },

    updateOptionByOptionIndex(state, action: UpdateOptionByOptionIdPayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)
      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options[action.payload.optionIndex] = action.payload.option
        }
      }
    },

    deleteOptionByOptionIndex(state, action: DeleteOptionByOptionIdPayloadAction) {
      const template = state.find((value) => value.id === action.payload.id)

      if (template) {
        const content = template.content[action.payload.index]
        if (content.type === 'option') {
          content.options = content.options.filter((_, i) => i !== action.payload.optionIndex)
        }
      }
    },

    updateDetailType(state, action: UpdateDetailTypePayloadAction) {
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
  setTemplates,
  addTemplate,
  deleteOptionByOptionIndex,
} = templateSlice.actions

export default templateSlice
