import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import withAuth from '@/components/hoc/withAuth'
import useBeforeunload from '@/hooks/useBeforeunload'
import FormInputBase from './components/molecules/FormInputBase'
import useConfiguration from './hooks/useConfiguration'

const Configuration = () => {
  const { handleSubmit, isLoading, onChangeUserPhone, onChangeUsername, userPhone, username } =
    useConfiguration()

  useBeforeunload()
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
          type="number"
          isDisabled={isLoading}
          minLength={11}
          label="사용자 전화번호"
          value={userPhone}
          onChange={onChangeUserPhone}
          helper="01012345678 형식으로 작성해주세요 :)"
        />
      </form>
    </Layout>
  )
}

export default withAuth(Configuration)
