import React from 'react'
import { Link } from 'react-router-dom'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import HambergerIcon from '../icons/HambergerIcon'
import TitleLogoIcon from '../icons/TitleLogoIcon'
import UserIcon from '../icons/UserIcon'

const Navigation = () => {
  return (
    <nav className="flex w-full justify-between">
      <Link to="/">
        <TitleLogoIcon className="h-[20px] w-fit cursor-pointer" />
      </Link>
      <div className="flex gap-3">
        <UserIcon className="cursor-pointer" />
        <Link to="edit">
          <ConfigurationIcon />
        </Link>
        <HambergerIcon className="cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navigation
