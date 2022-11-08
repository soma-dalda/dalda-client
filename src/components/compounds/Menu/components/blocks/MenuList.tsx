import React, { useMemo } from 'react'
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
import KakaoIcon from '@/components/molecules/icons/KakaoIcon'
import NaverIcon from '@/components/molecules/icons/NaverIcon'
import GoogleIcon from '@/components/molecules/icons/GoogleIcon'
import { baseURL } from '@/apis/https'
import useLogout from '@/hooks/useLogout'
import RightArrowIcon from '../../../../molecules/icons/RightArrowIcon'
import MenuCloseButton from './MenuCloseButton'
import MenuListItem from '../molecules/MenuListItem'

const getMenuStyle = () =>
  clsx(
    'absolute right-0 top-0 z-50 flex min-h-screen w-full animate-fade-in-left-all flex-col bg-white p-3'
  )

const getBellStyle = () =>
  clsx(
    'absolute -top-[3px] -right-[3px] h-3 w-3 p-1 text-[0.55em] text-point-700',
    'bg-brand-300 flex items-center justify-center rounded-full text-grayScale-700'
  )

const getLoginURL = (registerId: string) => {
  return import.meta.env.MODE === 'development'
    ? `/login/${registerId}`
    : `${baseURL}/oauth2/authorization/${registerId}`
}

const logoutURL = import.meta.env.MODE === 'development' ? `/logout` : `${baseURL}/logout`

const MenuList = () => {
  const { data: user } = useGetUser()
  const { data: companyOrder } = useGetOrders('company')
  const { data: consumerOrder } = useGetOrders('consumer')
  const logout = useLogout()

  const length = useMemo(() => {
    return (companyOrder?.orderList?.length ?? 0) + (consumerOrder?.orderList?.length ?? 0)
  }, [companyOrder, consumerOrder])

  return (
    <div className={getMenuStyle()}>
      <MenuCloseButton className="flex w-fit justify-between py-5">
        <RightArrowIcon />
      </MenuCloseButton>
      {user?.id ? (
        <ul>
          {Boolean(user?.companyDomain) && (
            <MenuListItem
              to={`/${encodeURIComponent(user?.companyDomain ?? '')}`}
              icon={<UserIcon className="h-[20px] w-[20px] fill-[#131415]" />}
            >
              내 페이지
            </MenuListItem>
          )}
          <MenuListItem to="/configuration" icon={<MyInformationIcon />}>
            내 정보 관리
          </MenuListItem>
          {Boolean(user.companyDomain) && (
            <MenuListItem
              to={`/${encodeURIComponent(user.companyDomain ?? '')}/edit`}
              icon={<ProfileIcon />}
            >
              가게 정보 관리
            </MenuListItem>
          )}
          <MenuListItem to="/#" icon={<TermIcon />}>
            이용약관
          </MenuListItem>
          <MenuListItem
            to="/orders"
            icon={
              <div className="relative">
                <span className={getBellStyle()}>{length}</span>
                <BellIcon />
              </div>
            }
          >
            주문확인
          </MenuListItem>
          <MenuListItem to="/#" icon={<PersonalTermIcon />}>
            개인정보처리방침
          </MenuListItem>
          <MenuListItem onClick={logout} to={logoutURL} icon={<LogoutIcon />}>
            로그아웃
          </MenuListItem>
        </ul>
      ) : (
        <ul>
          <MenuListItem
            to={getLoginURL('kakao')}
            icon={
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 p-1">
                <KakaoIcon />
              </span>
            }
          >
            카카오 계정으로 로그인
          </MenuListItem>
          <MenuListItem
            to={getLoginURL('google')}
            icon={
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1">
                <GoogleIcon />
              </span>
            }
          >
            구글 계정으로 로그인
          </MenuListItem>
          <MenuListItem
            to={getLoginURL('naver')}
            icon={
              <span className="h-6 w-6 rounded-full bg-green-400 p-1">
                <NaverIcon />
              </span>
            }
          >
            네이버 계정으로 로그인
          </MenuListItem>
        </ul>
      )}
    </div>
  )
}

export default MenuList
