import { atom } from 'recoil'
import { TemplateAtom } from '../../types'

const defaultValue: TemplateAtom = null

const TemplateState = atom<TemplateAtom>({
  key: 'TemplateState',
  default: defaultValue,
})

export default TemplateState
