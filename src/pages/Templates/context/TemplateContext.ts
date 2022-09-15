import { Question, Template } from '@/type'
import { createContext } from 'react'

export const defaultValue: Template = {
  id: '',
  content: [],
  title: '',
  companyId: '',
  createdAt: '',
  modifiedAt: '',
}

type TemplateAction = {
  handleUpdateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleAddQuestion: (type: Question['type']) => void
  handleDeleteQuestion: (index: number) => void
  handleUpdateQuestionTitle: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleAddOption: (index: number) => void
  handleUpdateOption: ({
    contentIndex,
    optionIndex,
  }: {
    contentIndex: number
    optionIndex: number
  }) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDeleteOption: ({
    contentIndex,
    optionIndex,
  }: {
    contentIndex: number
    optionIndex: number
  }) => () => void
  handleUpdateDetailType: ({
    contentIndex,
    detailType,
  }: {
    contentIndex: number
    detailType: Question['detailType']
  }) => void
  handleUpdateTemplate: (template: Template) => void
  handleResetTemplate: () => void
  handleUpdateImage: (index: number) => (imageUrl: string) => void
}

const defaultAction: TemplateAction = {
  handleUpdateTitle: () => {},
  handleAddQuestion: () => {},
  handleDeleteQuestion: () => {},
  handleUpdateQuestionTitle: () => () => {},
  handleAddOption: () => {},
  handleUpdateOption: () => () => {},
  handleDeleteOption: () => () => {},
  handleUpdateDetailType: () => {},
  handleUpdateTemplate: () => {},
  handleResetTemplate: () => {},
  handleUpdateImage: () => () => {},
}

export const TemplateValueContext = createContext(defaultValue)
export const TemplateActionContext = createContext(defaultAction)
