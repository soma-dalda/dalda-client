import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BellIcon from '../icons/BellIcon'
import ConfigurationIcon from '../icons/ConfigurationIcon'

const Navigation = () => {
  const { domain } = useParams()

  return (
    <nav className="flex w-full justify-between px-2 pt-2">
      <h1 className="text-xl font-thin">
        <Link to="/">달다</Link>
      </h1>
      <div className="flex items-center gap-1">
        {/* 로그인 한 유저의 정보 가 해당 프로필 주인이면 보이도록 */}
        <Link to={`./${domain}/edit`}>
          <ConfigurationIcon className="relative w-7 cursor-pointer" />
        </Link>
        <span className="relative cursor-pointer text-xl font-thin after:absolute after:-top-1 after:-right-1 after:h-4 after:w-4 after:rounded-full after:bg-red-400 after:text-center after:text-xs after:content-['5'] ">
          <BellIcon />
        </span>
      </div>
    </nav>
  )
}

export default Navigation
