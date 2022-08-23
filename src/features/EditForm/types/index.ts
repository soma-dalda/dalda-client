export type FormValue = {}

export type FormAction = {}

export type FormProviderProps = {
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

export type FormContext = FormAction & FormValue & FormProviderProps
