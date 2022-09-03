import React from 'react'
import { Layout } from '@/components'
import { Navigation } from '@/components/blocks'
import LogoColorIcon from '@/components/icons/LogoColorIcon'
import StoreIcon from '@/components/icons/StoreIcon'
import TitleLogoIcon from '@/components/icons/TitleLogoIcon'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout
      navigateion={<Navigation />}
      bottom={
        <div className="w-full p-3">
          <a
            href="#문의하기"
            className="group mt-8 flex w-full items-center justify-between rounded-3xl bg-brand-500 p-3 text-white shadow-xl hover:bg-brand-700"
          >
            <TitleLogoIcon className="h-8 w-32 fill-white opacity-20" />
            <span className="p-3 text-[15px] font-[600]">문의하기</span>
          </a>
        </div>
      }
    >
      <div className="mt-9 flex flex-col items-center justify-center ">
        <TitleLogoIcon className="h-[50px] fill-brand-500 opacity-20" />
        <LogoColorIcon className="h-[80px] w-[70px] translate-y-[-25px]" />
      </div>
      <h2 className="text-lg font-[500]">특별한 날 달달한 기억 달다</h2>
      <Link
        to="/edit"
        className="group mt-8 flex w-full items-center justify-between rounded-2xl bg-point-700 p-4 text-white shadow-xl hover:bg-point-500"
      >
        <span className="rounded-full bg-blue-900 p-3 group-hover:bg-point-500">
          <StoreIcon />
        </span>
        <span className="p-3 text-[15px] font-[600]">내 가게 등록하기</span>
      </Link>
      <div className="mt-7 flex w-full flex-col gap-5 p-3 text-xl font-semibold">
        <h3>오늘의 추천 가게</h3>
        <div className="flex w-full gap-4 overflow-y-scroll pb-5">
          <Link
            to="/#"
            className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
          >
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
              <LogoColorIcon className="h-[50px] w-[50px]" />
            </div>
            <h4 className="text-base font-normal">달다 케이크</h4>
          </Link>
          <Link
            to="/#"
            className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
          >
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
              <LogoColorIcon className="h-[50px] w-[50px]" />
            </div>
            <h4 className="text-base font-normal">달다 케이크</h4>
          </Link>
          <Link
            to="/#"
            className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
          >
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
              <LogoColorIcon className="h-[50px] w-[50px]" />
            </div>
            <h4 className="text-base font-normal">달다 케이크</h4>
          </Link>
          <Link
            to="/#"
            className="flex w-32 cursor-pointer flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
          >
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border p-3">
              <LogoColorIcon className="h-[50px] w-[50px]" />
            </div>
            <h4 className="text-base font-normal">달다 케이크</h4>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
