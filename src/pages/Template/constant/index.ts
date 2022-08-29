import { OptionQuestion, Template, DescriptionQuestion } from '@/type'

export const initialTemplate: Template = {
  title: '',
  id: '0',
  content: [],
}

export const initalOptionQuestion: OptionQuestion = {
  type: 'option',
  question: '',
  detailType: 'multiObjective',
  options: [],
  images: [],
}
export const initalDescriptionQuestion: DescriptionQuestion = {
  type: 'description',
  detailType: 'longSubjective',
  question: '',
  options: null,
  images: [],
}
