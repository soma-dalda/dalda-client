import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/store/config'

import { Layout } from '@/components'
import IllustErrorIcon from '@/components/molecules/icons/IllustErrorIcon'
import { Navigation } from '@/components/blocks'

const ErrorPage = () => {
  const navigate = useNavigate()
  const { error } = useAppSelector((state) => state.error)

  return (
    <Layout navigtaion={<Navigation />}>
      <div className="flex h-[calc(100vh-152px)] w-full flex-col items-center justify-center">
        <IllustErrorIcon />
        <span className="mt-6 text-lg font-bold">{error.message}</span>
        <button
          type="button"
          className="mt-12 rounded-3xl border p-3 px-6"
          onClick={() => navigate(-1)}
        >
          이전 화면 으로
        </button>
      </div>
    </Layout>
  )
}

export default ErrorPage
