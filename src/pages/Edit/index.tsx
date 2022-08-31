import React, { useState } from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import clsx from 'clsx'
import EditDays from './components/blocks/EditDays'
import EditProfile from './components/blocks/EditProfile'

const Edit = () => {
  const [editType, setEditType] = useState<'profile' | 'days'>('profile')

  return (
    <Layout navigateion={<NavigationWithArrow>프로필 설정</NavigationWithArrow>}>
      <div className="my-6 flex w-full items-center justify-start gap-2 border-b p-3 px-2 text-sm">
        <button
          className={clsx(editType === 'profile' && 'text-brand-500')}
          type="button"
          onClick={() => setEditType((prev) => (prev === 'days' ? 'profile' : 'days'))}
        >
          프로필
        </button>
        <tr className="flex h-[0.75em] w-[1px] bg-grayScale-400" />
        <button
          className={clsx(editType === 'days' && 'text-brand-500')}
          type="button"
          onClick={() => setEditType((prev) => (prev === 'days' ? 'profile' : 'days'))}
        >
          날짜
        </button>
      </div>
      {editType === 'profile' ? (
        <section className="w-full animate-fade-in-left">
          <EditProfile />
        </section>
      ) : (
        <section className="w-full animate-fade-in-right">
          <EditDays />
        </section>
      )}
    </Layout>
  )
}

export default Edit
