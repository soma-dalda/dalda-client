import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'

import React from 'react'
import { Link } from 'react-router-dom'
import TemplateRadioForm from '../blocks/TemplateRadioForm'

/** 유저 조회 -> 각 주문서에 대한 ID 값을 받아오기 */
const Templates = () => {
  return (
    <Layout>
      <main className="relative flex min-h-screen w-full flex-col">
        <NavigationWithArrow
          button={
            <Link
              to="post"
              className="rounded-md bg-point-700 p-2 px-3 text-sm font-normal text-white hover:bg-point-500"
            >
              주문서 추가
            </Link>
          }
        >
          내 주문서 관리
        </NavigationWithArrow>
        <TemplateRadioForm />
      </main>
    </Layout>
  )
}

export default Templates
