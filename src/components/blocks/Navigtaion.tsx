import React from 'react'
import { Link } from 'react-router-dom'
import { MenuHamberger } from '../compounds/Menu/components'
import TitleLogoIcon from '../molecules/icons/TitleLogoIcon'

const Navigation = () => {
  return (
    <nav className="flex w-full justify-between">
      <Link to="/" className="flex justify-start" aria-label="banner for redirect mainpage">
        <TitleLogoIcon className="h-[20px] w-auto cursor-pointer" />
      </Link>
      <MenuHamberger />
    </nav>
  )
}

export default Navigation
