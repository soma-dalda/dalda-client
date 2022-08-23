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
