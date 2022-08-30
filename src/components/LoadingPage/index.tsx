import React from 'react'

import { Layout, Navigation } from '@/components'
import LoadingIcon from '../icons/LoadingIcon'

const LoadingPage = () => {
  return (
    <Layout navigateion={<Navigation />}>
      <div className="flex h-[calc(100vh-152px)] w-full flex-col items-center justify-center">
        <LoadingIcon />
        <span className="mt-6 text-center text-lg font-bold">
          불러오고 있는 중 입니다.
          <br /> 잠시만 기다려주세요
        </span>
      </div>
    </Layout>
  )
}

export default LoadingPage
