import React, { useCallback, useMemo, useState } from 'react'
import HambergerIcon from '@/components/icons/HambergerIcon'
import { MenuContextAPI } from '../../context/MenuContext'
import MenuList from '../blocks/MenuList'

type Props = {
  isView?: boolean
}

const MenuHamberger = ({ isView: propsIsView }: Props) => {
  const [isView, setIsView] = useState(propsIsView ?? false)

  const handleCloseButtonClick = useCallback(() => {
    setIsView(false)
  }, [isView])

  const value = useMemo(() => ({ isView, setIsView, handleCloseButtonClick }), [isView, setIsView])

  return (
    <MenuContextAPI.Provider value={value}>
      <HambergerIcon className="cursor-pointer" onClick={() => setIsView(true)} />
      {isView && <MenuList />}
    </MenuContextAPI.Provider>
  )
}

export default MenuHamberger
