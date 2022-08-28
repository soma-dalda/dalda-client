import React, { useState } from 'react'
import { FormDays } from './components'
import EditProfile from './components/EditProfile'

const EditForm = () => {
  const [editType, setEditType] = useState<'profile' | 'days'>('profile')

  return (
    <>
      <div className="flex w-full justify-end px-2">
        <button
          className="rounded-lg border bg-gray-50 p-2 text-sm"
          type="button"
          onClick={() => setEditType((prev) => (prev === 'days' ? 'profile' : 'days'))}
        >
          {editType === 'days' ? '프로필' : '날짜'} 설정
        </button>
      </div>
      {editType === 'profile' ? (
        <section className="animate-fade-in-left">
          <EditProfile />
        </section>
      ) : (
        <section className="animate-fade-in-right">
          <FormDays />
        </section>
      )}
    </>
  )
}

export default EditForm
