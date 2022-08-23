import { ChangeEventHandler } from 'react'

export type FormBaseProps = {
  label?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
