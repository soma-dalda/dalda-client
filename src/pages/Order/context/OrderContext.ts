import { createContext } from 'react'
import { Order } from '@/type'
import { Updater } from 'use-immer'

export type OrderAction = {
  handleClickStep: (step: number) => () => void
  handleChangeCheckbox: (index: number) => React.ChangeEventHandler<HTMLInputElement>
  handleChangeRadio: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTextArea: (index: number) => React.ChangeEventHandler<HTMLTextAreaElement>
  setOrder: Updater<Order & { answers: string[][] }>
  handleAddImage: (url: string) => void
  handleSubmit: () => void
  handlePickupPhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePickupdate: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const defaultOrder: Order & { answers: string[][] } = {
  templateId: '',
  answers: [['']],
  templateResponses: [],
}

const defaultAction: OrderAction = {
  handleClickStep: () => () => {},
  handleChangeCheckbox: () => () => {},
  handlePickupPhoneNumber: () => {},
  handleChangeRadio: () => () => {},
  handleChangeTextArea: () => () => {},
  handlePickupdate: () => {},
  setOrder: () => {},
  handleAddImage: () => {},
  handleSubmit: () => {},
}

const OrderValueContext = createContext({ order: defaultOrder, current: 0 })
const OrderActionContext = createContext({ ...defaultAction })

export { OrderValueContext, OrderActionContext }
