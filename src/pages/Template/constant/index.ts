import { TemplateState, QuestionOption, QuestionDescription } from '../types'

export const initialTemplate: TemplateState = {
  title: '',
  id: '0',
  content: [],
}

export const initalOptionQuestion: QuestionOption = {
  type: 'option',
  question: '',
  detailType: 'multiObjective',
  options: [],
  images: [],
}
export const initalDescriptionQuestion: QuestionDescription = {
  type: 'description',
  question: '',
  detailType: 'longSubjective',
  images: [],
}
