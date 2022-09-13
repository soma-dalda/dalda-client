import React from 'react'
import { NavigationWithArrow } from '@/components/blocks'
import QuestionAddForm from '@/pages/Templates/components/molecules/QuestionAddForm'
import LoadingPage from '@/components/molecules/LoadingPage'
import { Layout } from '@/components'
import Questions from '../molecules/Questions'
import TemplateTitleInput from '../molecules/TemplateTitleInput'
import useTemplate from '../../hooks/useTemplate'

const Template = () => {
  const { handleAddQuestion, handleSubmit, handleUpdateTitle, template, isLoading } = useTemplate()
  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <Layout>
      <form
        id="template"
        className="relative flex min-h-screen w-full flex-col"
        onSubmit={handleSubmit}
      >
        {/* 주문서 헤더 */}
        <NavigationWithArrow
          button={
            <button type="submit" form="template" className="cursor-pointer text-brand-500">
              저장
            </button>
          }
        >
          {template?.title}
        </NavigationWithArrow>
        <QuestionAddForm handleClickAddButton={handleAddQuestion} />
        <TemplateTitleInput
          required
          value={template?.title}
          onChange={handleUpdateTitle}
          placeholder="작성중인 주문서 이름을 정해주세요"
        >
          주문서 이름
        </TemplateTitleInput>
        {/* 질문 들 */}
        <Questions content={template?.content ?? []} />
        {/* 주문서 바텀 */}
      </form>
    </Layout>
  )
}

export default Template
