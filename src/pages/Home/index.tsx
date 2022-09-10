import React from 'react'
import { Layout } from '@/components'
import { Navigation } from '@/components/blocks'
import LogoColorIcon from '@/components/molecules/icons/LogoColorIcon'
import StoreIcon from '@/components/molecules/icons/StoreIcon'
import TitleLogoIcon from '@/components/molecules/icons/TitleLogoIcon'
import { Link } from 'react-router-dom'
import { Anchor } from '@/components/atoms'
import clsx from 'clsx'
import useGetUser from '@/hooks/useGetUser'
import RecommandCards from './components/blocks/RecommandCards'

const buttonText = clsx('p-3 text-[15px] font-[600]')
const bottomLink = clsx(
  'group mt-8 flex w-full items-center justify-between rounded-3xl bg-brand-500 p-3 text-white shadow-xl hover:bg-brand-700'
)
const editLink = clsx(
  'group mt-8 flex w-full items-center justify-between rounded-2xl bg-point-700 p-4 text-white shadow-xl hover:bg-point-500'
)

const Home = () => {
  const { data: user } = useGetUser()

  return (
    <Layout
      navigtaion={<Navigation />}
      bottom={
        <div className="w-full p-3">
          <Anchor href="https://open.kakao.com/o/gSgY8Ove" className={bottomLink}>
            <TitleLogoIcon className="h-8 w-32 fill-white opacity-20" />
            <span className={buttonText}>문의하기</span>
          </Anchor>
        </div>
      }
    >
      <div className="mt-9 flex flex-col items-center justify-center ">
        <TitleLogoIcon className="h-[50px] fill-brand-500 opacity-20" />
        <LogoColorIcon className="h-[80px] w-[70px] translate-y-[-25px]" />
      </div>
      <h2 className="text-lg font-[500]">특별한 날 달달한 기억 달다</h2>
      {user?.id && (
        <Link
          to={user?.companyDomain ? `${user?.companyDomain}/edit` : '/edit'}
          className={editLink}
        >
          <span className="rounded-full bg-blue-900 p-3 group-hover:bg-point-500">
            <StoreIcon />
          </span>
          <span className={buttonText}>내 가게 등록하기</span>
        </Link>
      )}
      <RecommandCards title="오늘의 추천 가게" />
    </Layout>
  )
}

export default Home
