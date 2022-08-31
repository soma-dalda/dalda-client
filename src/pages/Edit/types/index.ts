import { ChangeEventHandler } from 'react'

export type FormBaseProps = {
  label?: string
  value: string
  isRequired?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
