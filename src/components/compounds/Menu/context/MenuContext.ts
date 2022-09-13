import { createContext } from 'react'

type MenuContext = {
  isView: boolean
  setIsView: React.Dispatch<React.SetStateAction<boolean>>
  handleCloseButtonClick: () => void
}

const defaultValue: MenuContext = {
  isView: false,
  setIsView: () => {},
  handleCloseButtonClick: () => {},
}

export const MenuContextAPI = createContext(defaultValue)
