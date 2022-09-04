import React from 'react'

import { FormControl } from '@/components/compounds/Form/components'
import FormDescription from '../molecules/FormDescription'
import FormInputBase from '../molecules/FormInputBase'
import FormLink from '../molecules/FormLink'
import useCompanyEditValue from '../../hooks/useCompanyEditValue'
import useCompanyEditAction from '../../hooks/useCompanyEditAction'
import EditEtcLinks from './EditEtcLinks'
import { validateBlank } from '../../utils'
import useCompany from '../../hooks/useCompany'

const EditProfile = () => {
  const {
    companyDomain,
    companyIntroduction,
    companyLocation,
    companyName,
    instagramLink,
    qnaLink,
  } = useCompanyEditValue()

  const {
    handleChangeDomain,
    handleChangeInstagram,
    handleChangeIntroduction,
    handleChangeLocation,
    handleChangeName,
    handleChangeQnaLink,
  } = useCompanyEditAction()

  const { handleSaveButtonClick } = useCompany()

  return (
    <div className="flex w-full animate-fade-in-left flex-col justify-between gap-5">
      <div className="w-full">
        <FormControl
          as="form"
          onSubmit={handleSaveButtonClick}
          className="flex w-full shrink-0 flex-col gap-6 p-2"
          id="profile"
        >
          <FormInputBase
            isRequired
            isError={!validateBlank(companyName)}
            label="상호명"
            helper="프로필에 보여줄 가게명을 입력해주세요 :)"
            value={companyName ?? ''}
            onChange={handleChangeName}
          />
          <FormDescription
            isError={!validateBlank(companyIntroduction)}
            label="가게 설명"
            value={companyIntroduction ?? ''}
            onChange={handleChangeIntroduction}
          />
          <FormInputBase
            isRequired
            isError={!validateBlank(companyLocation)}
            label="위치정보"
            helper="가게의 위치를 작성 해주세요 :)"
            value={companyLocation ?? ''}
            onChange={handleChangeLocation}
          />
          <FormInputBase
            isRequired
            isError={!validateBlank(companyDomain)}
            label="도메인"
            helper={`https://dalda.shop/${companyDomain}`}
            value={companyDomain ?? ''}
            onChange={handleChangeDomain}
          />
          <FormLink
            label="인스타그램 링크"
            value={instagramLink ?? ''}
            onChange={handleChangeInstagram}
          />
          <FormLink label="오픈채팅 링크" value={qnaLink ?? ''} onChange={handleChangeQnaLink} />
          <EditEtcLinks />
        </FormControl>
      </div>
    </div>
  )
}

export default EditProfile
