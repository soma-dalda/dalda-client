import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
// import { User } from '@/type'
import { Route, Routes, useParams } from 'react-router-dom'
import ActiveLink from '@/components/atoms/ActiveLink'
import EditDays from './components/blocks/EditDays'
import EditProfile from './components/blocks/EditProfile'
import FormNavigationWithDivider from './components/molecules/FormNavigationWithDivider'
import CompanyEditContextProvider from './context/CompanyEditContextProvider'

// type CompanyProfile = {
//   companyName: string
//   companyDomain: string
//   companyIntroduction: string
//   companyLocation: string
//   instagramLink: string
//   qnaLink: string
//   etcLinks: {
//     [key: string]: string
//   }
// }

const Edit = () => {
  const params = useParams()

  return (
    <Layout navigateion={<NavigationWithArrow>프로필 설정</NavigationWithArrow>}>
      <FormNavigationWithDivider
        buttons={[
          <ActiveLink active={params['*'] === ''} type="button" to="">
            프로필
          </ActiveLink>,
          <ActiveLink active={params['*'] === 'days'} type="button" to="days">
            날짜
          </ActiveLink>,
        ]}
      />
      <CompanyEditContextProvider>
        <Routes>
          <Route path="" element={<EditProfile />} />
          <Route path="days" element={<EditDays />} />
        </Routes>
      </CompanyEditContextProvider>
    </Layout>
  )
}

export default Edit
