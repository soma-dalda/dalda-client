import React from 'react'
import clsx from 'clsx'
import UserIcon from '@/components/molecules/icons/UserIcon'
import MyInformationIcon from '@/components/molecules/icons/MyInformationIcon'
import ProfileIcon from '@/components/molecules/icons/ProfileIcon'
import LogoutIcon from '@/components/molecules/icons/LogoutIcon'
import TermIcon from '@/components/molecules/icons/TermIcon'
import PersonalTermIcon from '@/components/molecules/icons/PersonalTermIcon'
import useGetUser from '@/hooks/useGetUser'
import BellIcon from '@/components/molecules/icons/BellIcon'
import useGetOrders from '@/hooks/useGetOrders'
import RightArrowIcon from '../../../../molecules/icons/RightArrowIcon'
import MenuCloseButton from './MenuCloseButton'
import MenuListItem from '../molecules/MenuListItem'

const getMenuStyle = () =>
  clsx(
    'absolute right-0 top-0 z-50 flex min-h-screen w-full animate-fade-in-left-all flex-col bg-white p-3'
  )

const getBellStyle = (length: string | number) =>
  clsx(
    'relative after:absolute after:-top-[3px] after:-right-[3px] after:h-3 after:w-3 after:p-1',
    'after:bg-brand-300 after:flex after:items-center after:justify-center after:text-xs after:font-thin after:rounded-full after:text-grayScale-700',
    `after:content-['${length.toString()}']`
  )

const MenuList = () => {
  const { data: user } = useGetUser()
  const { data: companyOrder } = useGetOrders('company')
  const { data: consumerOrder } = useGetOrders('consumer')
  const length = (companyOrder?.length ?? 0) + (consumerOrder?.length ?? 0)

  return (
    <div className={getMenuStyle()}>
      <MenuCloseButton className="flex w-fit justify-between py-5">
        <RightArrowIcon />
      </MenuCloseButton>
      {user?.id ? (
        <ul>
          <MenuListItem
            to={`/${user?.companyDomain}`}
            icon={<UserIcon className="h-[20px] w-[20px] fill-[#131415]" />}
          >
            내 페이지
          </MenuListItem>
          <MenuListItem to="/configuration" icon={<MyInformationIcon />}>
            내 정보 관리
          </MenuListItem>
          {user.companyDomain && (
            <MenuListItem to={`/${user.companyDomain}/edit`} icon={<ProfileIcon />}>
              프로필 관리
            </MenuListItem>
          )}
          <MenuListItem to="/#" icon={<TermIcon />}>
            이용약관
          </MenuListItem>
          <MenuListItem
            to="/orders"
            icon={
              <div className={`${getBellStyle(length)}`}>
                <BellIcon />
              </div>
            }
          >
            주문확인
          </MenuListItem>
          <MenuListItem to="/#" icon={<PersonalTermIcon />}>
            개인정보처리방침
          </MenuListItem>
          <MenuListItem to="/#" icon={<LogoutIcon />}>
            로그아웃
          </MenuListItem>
        </ul>
      ) : (
        <ul>
          <MenuListItem
            to="/login"
            icon={<UserIcon className="h-[20px] w-[20px] fill-[#131415]" />}
          >
            로그인
          </MenuListItem>
        </ul>
      )}
    </div>
  )
}

export default MenuList
