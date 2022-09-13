import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import FormInputBase from './components/molecules/FormInputBase'
import useConfiguration from './hooks/useConfiguration'

const Configuration = () => {
  const { handleSubmit, isLoading, onChangeUserPhone, onChangeUsername, userPhone, username } =
    useConfiguration()
  return (
    <Layout
      navigtaion={
        <NavigationWithArrow
          button={
            <button
              form="configuration"
              type="submit"
              disabled={isLoading}
              className={`cursor-pointer ${
                isLoading ? 'cursor-not-allowed text-grayScale-400' : 'text-brand-500'
              }`}
            >
              {isLoading ? '진행중' : '저장'}
            </button>
          }
        >
          내 정보
        </NavigationWithArrow>
      }
    >
      <form onSubmit={handleSubmit} id="configuration" className="mt-10 flex w-full flex-col gap-5">
        <FormInputBase
          isRequired
          isDisabled={isLoading}
          label="사용자 이름"
          value={username}
          onChange={onChangeUsername}
        />
        <FormInputBase
          isRequired
          isDisabled={isLoading}
          label="사용자 전화번호"
          value={userPhone}
          onChange={onChangeUserPhone}
        />
      </form>
    </Layout>
  )
}

export default Configuration
