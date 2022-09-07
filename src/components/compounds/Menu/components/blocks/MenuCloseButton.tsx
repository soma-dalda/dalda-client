import RightArrowIcon from '@/components/molecules/icons/RightArrowIcon'
import React, { useCallback, useContext } from 'react'
import { MenuContextAPI } from '../../context/MenuContext'

const MenuCloseButton = React.forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({ onClick, ...props }, ref) => {
    const { handleCloseButtonClick } = useContext(MenuContextAPI)

    const handleClickButton = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(e)
        }
        handleCloseButtonClick()
      },
      [onClick]
    )

    return (
      <button type="button" {...props} onClick={handleClickButton} ref={ref}>
        <RightArrowIcon />
      </button>
    )
  }
)

export default MenuCloseButton
