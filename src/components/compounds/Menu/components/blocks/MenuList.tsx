import React from 'react'
import clsx from 'clsx'
import UserIcon from '@/components/icons/UserIcon'
import MyInformationIcon from '@/components/icons/MyInformationIcon'
import ProfileIcon from '@/components/icons/ProfileIcon'
import LogoutIcon from '@/components/icons/LogoutIcon'
import TermIcon from '@/components/icons/TermIcon'
import PersonalTermIcon from '@/components/icons/PersonalTermIcon'
import RightArrowIcon from '../../../../icons/RightArrowIcon'
import MenuCloseButton from './MenuCloseButton'
import MenuListItem from '../molecules/MenuListItem'

const getMenuStyle = () =>
  clsx(
    'absolute right-0 top-0 z-50 flex min-h-screen w-full animate-fade-in-left-all flex-col bg-white p-3'
  )

const MenuList = () => {
  return (
    <div className={getMenuStyle()}>
      <MenuCloseButton className="flex w-fit justify-between py-5">
        <RightArrowIcon />
      </MenuCloseButton>
      <ul>
        <MenuListItem
          to="https://dalda.shop"
          icon={<UserIcon className="h-[20px] w-[20px] fill-[#131415]" />}
        >
          내 페이지
        </MenuListItem>
        <MenuListItem to="/#" icon={<MyInformationIcon />}>
          내 정보 관리
        </MenuListItem>
        <MenuListItem to="/#" icon={<ProfileIcon />}>
          프로필 관리
        </MenuListItem>
        <MenuListItem to="/#" icon={<TermIcon />}>
          이용약관
        </MenuListItem>
        <MenuListItem to="/#" icon={<PersonalTermIcon />}>
          개인정보처리방침
        </MenuListItem>
        <MenuListItem to="/#" icon={<LogoutIcon />}>
          로그아웃
        </MenuListItem>
      </ul>
    </div>
  )
}

export default MenuList
