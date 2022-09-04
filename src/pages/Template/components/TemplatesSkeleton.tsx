import React from 'react'
import TemplateHeader from './TemplateHeader'

const TemplatesSkeleton = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between pt-4">
      <main className="px-2">
        <TemplateHeader save={false}>내 주문서 관리</TemplateHeader>
        <section className="mt-8">
          <form className="flex animate-pulse flex-col gap-4 rounded-xl bg-gray-200">
            <div className="flex w-full justify-between rounded-xl border p-3">
              <div className="flex gap-3 p-3" />
            </div>
          </form>
          <form className="mt-4 flex animate-pulse flex-col gap-4 rounded-xl bg-gray-200">
            <div className="flex w-full justify-between rounded-xl border p-3">
              <div className="flex gap-3 p-3" />
            </div>
          </form>
          <button className="mt-4 w-full rounded-xl bg-brand-300 p-3 text-white" type="button">
            수정
          </button>
        </section>
      </main>
      <section className="flex w-full gap-5 border-t bg-white px-2 pb-2 pt-2">
        <button
          className="w-full rounded-xl bg-point-700 p-4 text-white hover:bg-point-500"
          type="button"
        >
          주문서 추가하기
        </button>
      </section>
    </div>
  )
}

export default TemplatesSkeleton
