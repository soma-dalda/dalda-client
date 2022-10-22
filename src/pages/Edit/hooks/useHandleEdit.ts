import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useCompanyEditValue from './useCompanyEditValue'
import usePatchUser from './usePatchCompany'
import useEditMount from './useEditMount'

const useHandleEdit = () => {
  const company = useCompanyEditValue()
  const navigate = useNavigate()
  const { isLoading: getIsLoading } = useEditMount()

  const { mutate, isLoading: putIsLoading } = usePatchUser({
    onSuccess: () => {
      if (company.companyDomain) {
        navigate(`/${encodeURIComponent(company.companyDomain)}`)
      }
    },
  })

  const handleSaveButtonClick = useCallback(
    (e: React.FormEvent<React.ElementType<any> | HTMLFormElement>) => {
      e.preventDefault()
      if (company) {
        const {
          companyName,
          companyDomain,
          companyLocation,
          companyIntroduction,
          businessHours,
          userPhone: companyPhone,
          profileImage,
          qnaLink,
          instaLink,
          etcLinks,
        } = company

        mutate({
          companyName,
          companyDomain,
          companyLocation,
          companyIntroduction,
          businessHours,
          companyPhone,
          profileImage,
          qnaLink,
          instaLink,
          etcLinks,
        })
      }
    },
    [company]
  )

  return {
    handleSaveButtonClick,
    isLoading: getIsLoading || putIsLoading,
  }
}

export default useHandleEdit
