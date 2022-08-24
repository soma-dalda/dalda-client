export type Checkbox = string

export type CheckboxProviderProps = {
  checkboxs: Checkbox[] | null | undefined
  setCheckboxs: (callback: (params: string[]) => string[]) => void
}

export type CheckboxControlContextAPI = {
  checkboxs: Checkbox[] | null | undefined

  addCheckbox: () => void
  deleteCheckbox: (id: number) => void
  getCheckbox: (id: number) => Checkbox | null
  updateCheckboxValue: (id: number, checkbox: { value: string; optionIndex: number }) => void
}

export type Option = 'singleObjective' | 'multiObjective' | string
export type Description = 'shortSubjective' | 'longSubjective' | string

export type OptionTemplate = {
  type: Option
  question: string
  options: string[]
  images: string[]
}

export type DescriptionTemplate = {
  type: Description
  question: string
  images: string[]
  options: null
}

export type TemplateAtom = (OptionTemplate | DescriptionTemplate)[] | null
