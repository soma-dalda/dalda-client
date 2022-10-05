import React, { useCallback, useMemo, useState } from 'react'
import HambergerIcon from '@/components/molecules/icons/HambergerIcon'
import useGetUser from '@/hooks/useGetUser'
import { MenuContextAPI } from '../../context/MenuContext'
import MenuList from '../blocks/MenuList'

type Props = {
  isView?: boolean
}

const MenuHamberger = ({ isView: propsIsView }: Props) => {
  const [isView, setIsView] = useState(propsIsView ?? false)
  const { data: user } = useGetUser()

  const handleCloseButtonClick = useCallback(() => {
    setIsView(false)
  }, [isView])

  const value = useMemo(() => ({ isView, setIsView, handleCloseButtonClick }), [isView, setIsView])

  return (
    <MenuContextAPI.Provider value={value}>
      {user?.id ? (
        <HambergerIcon className="cursor-pointer" onClick={() => setIsView(true)} />
      ) : (
        <button type="button" onClick={() => setIsView(true)}>
          로그인
        </button>
      )}
      {isView && <MenuList />}
    </MenuContextAPI.Provider>
  )
}

export default MenuHamberger
