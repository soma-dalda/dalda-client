export type Checkbox = {
  value: string
  isUpdate?: boolean
  isChecked?: boolean
}

export type CheckboxProviderProps = {
  checkboxs: Checkbox[]
  setCheckboxs: React.Dispatch<React.SetStateAction<Checkbox[]>>
}

export type CheckboxControlContextAPI = {
  checkboxs: Checkbox[]

  addCheckbox: () => void
  updateCheckbox: (id: number) => void
  deleteCheckbox: (id: number) => void
  getCheckbox: (id: number) => Checkbox | null
  updateCheckboxValue: (id: number, checkbox: Checkbox) => void
}

export type Option = 'SingleOption' | 'MultiOption'
export type Description = 'ShortDescription' | 'LongDescription'

export type OptionTemplate = {
  type: Option
  payload: {
    options: string[]
    images: string[]
  }
}

export type DescriptionTemplate = {
  type: Description
  payload: {
    description: string
    images: string[]
  }
}

export type TemplateAtom = (OptionTemplate | DescriptionTemplate)[] | null
