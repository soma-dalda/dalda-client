import React from 'react'
import { Link } from 'react-router-dom'
import { MenuHamberger } from '../compounds/Menu/components'
import TitleLogoIcon from '../icons/TitleLogoIcon'

const Navigation = () => {
  return (
    <nav className="flex w-full justify-between">
      <Link to="/">
        <TitleLogoIcon className="h-[20px] w-fit cursor-pointer" />
      </Link>
      <MenuHamberger />
    </nav>
  )
}

export default Navigation
