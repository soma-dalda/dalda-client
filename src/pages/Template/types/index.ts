export type QuestionOption = {
  type: 'option'
  question: string
  detailType: 'singleObjective' | 'multiObjective'
  options: string[]
  images: string[]
}

export type QuestionDescription = {
  type: 'description'
  question: string
  detailType: 'shortSubjective' | 'longSubjective'
  images: string[]
}

export type Question = QuestionOption | QuestionDescription

export type TemplateState = {
  title: string
  id?: string
  content: Question[]
}
