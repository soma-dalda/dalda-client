import { createContext } from 'react'
import { Order } from '@/type'
import { Updater } from 'use-immer'

export type OrderAction = {
  handleClickStep: (step: number) => () => void
  handleChangeCheckbox: (index: number) => React.ChangeEventHandler<HTMLInputElement>
  handleClickBottomButton: () => void
  handleChangeRadio: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTextArea: (index: number) => React.ChangeEventHandler<HTMLTextAreaElement>
  setOrder: Updater<Order & { answers: string[] }>
  handleAddImage: (url: string) => void
}

export const defaultOrder: Order & { answers: string[] } = {
  templateId: '',
  answers: [''],
  templateResponse: [],
}

const defaultAction: OrderAction = {
  handleClickStep: () => () => {},
  handleChangeCheckbox: () => () => {},
  handleClickBottomButton: () => {},
  handleChangeRadio: () => () => {},
  handleChangeTextArea: () => () => {},
  setOrder: () => {},
  handleAddImage: () => {},
}

const OrderValueContext = createContext({ order: defaultOrder, current: 0, checked: [-1] })
const OrderActionContext = createContext({ ...defaultAction })

export { OrderValueContext, OrderActionContext }
