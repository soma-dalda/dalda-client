import { getCookie } from '@/utils'
import axios from 'axios'
import React from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import HambergerIcon from '../icons/HambergerIcon'
// import SpinnerIcon from '../icons/SpinnerIcon'
import TitleLogoIcon from '../icons/TitleLogoIcon'
import UserIcon from '../icons/UserIcon'

const loginRequest = async () => {
  const data = await axios.post('/login')
  return data.status
}

const Navigation = () => {
  const accessToken = getCookie('access-token')
  const { mutate } = useMutation('/login', loginRequest)

  return (
    <nav className="flex w-full justify-between px-2">
      <h1 className="text-xl font-thin">
        <Link to="/">
          <TitleLogoIcon className="w-16 fill-transparent text-gray-900" />
        </Link>
      </h1>
      <div className="flex items-center gap-1">
        {/* 로그인 한 유저의 정보 가 해당 프로필 주인이면 보이도록 */}
        {accessToken ? (
          <>
            <Link to="./user">
              <UserIcon />
            </Link>
            <Link to="./edit">
              <ConfigurationIcon className="relative w-7 cursor-pointer stroke-[#72787F]" />
            </Link>
            <HambergerIcon />
          </>
        ) : (
          <button type="button" onClick={() => mutate()}>
            로그인
          </button>
        )}
        {/* <span className="relative cursor-pointer text-xl font-thin after:absolute after:-top-1 after:-right-1 after:h-4 after:w-4 after:rounded-full after:bg-red-400 after:text-center after:text-xs after:content-['5'] ">
          <BellIcon />
        </span> */}
      </div>
    </nav>
  )
}

export default Navigation
