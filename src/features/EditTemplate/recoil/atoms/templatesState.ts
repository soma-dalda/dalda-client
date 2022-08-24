import { atom } from 'recoil'
import { TemplateAtom } from '../../types'

const defaultValue: TemplateAtom[] = []

const TemplatesState = atom<TemplateAtom[]>({
  key: 'TemplatesState',
  default: defaultValue,
})

export default TemplatesState
