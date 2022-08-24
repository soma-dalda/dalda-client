import React from 'react'
import HeaderWithBackButton from '@/components/HeaderWithBackButton'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <HeaderWithBackButton>내 프로필 관리</HeaderWithBackButton>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
