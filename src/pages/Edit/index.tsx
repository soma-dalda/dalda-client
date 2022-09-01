import React, { useState } from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import ActiveButton from '@/components/atoms/ActiveButton'
import EditDays from './components/blocks/EditDays'
import EditProfile from './components/blocks/EditProfile'
import FormNavigationWithDivider from './components/molecules/FormNavigationWithDivider'

const Edit = () => {
  const [editType, setEditType] = useState<'profile' | 'days'>('profile')

  return (
    <Layout navigateion={<NavigationWithArrow>프로필 설정</NavigationWithArrow>}>
      <FormNavigationWithDivider
        buttons={[
          <ActiveButton
            active={editType === 'profile'}
            type="button"
            onClick={() => setEditType((prev) => (prev === 'days' ? 'profile' : 'days'))}
          >
            프로필
          </ActiveButton>,
          <ActiveButton
            active={editType === 'days'}
            type="button"
            onClick={() => setEditType((prev) => (prev === 'days' ? 'profile' : 'days'))}
          >
            날짜
          </ActiveButton>,
        ]}
      />
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
