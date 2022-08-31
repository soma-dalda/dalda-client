import React from 'react'

import { FormControl } from '@/components/compounds/Form/components'
import useAddLinks from '@/components/compounds/Form/hooks/useAddLinks'
import useInput from '@/components/compounds/Form/hooks/useInput'
import FormLinks from '../molecules/FormLinks'
import FormDescription from '../molecules/FormDescription'
import FormInputBase from '../molecules/FormInputBase'
import FormLink from '../molecules/FormLink'

const EditProfile = () => {
  const [domain, , onChangeDomain] = useInput()
  const [name, , onChangeName] = useInput()
  const [instagram, , onChangeInstagram] = useInput()
  const [location, , onChnageLocation] = useInput()
  const [description, , onChangeDescription] = useInput()
  const [openChat, , onChangeOpenChat] = useInput()
  const { handleAddLink, link, links, onChangeLink, handleDeleteLink } = useAddLinks({})

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="w-full">
        <FormControl as="form" className="flex w-full shrink-0 flex-col gap-6 p-2">
          <FormInputBase
            isRequired
            label="상호명"
            helper="프로필에 보여줄 가게명을 입력해주세요 :)"
            value={name}
            onChange={onChangeName}
          />
          <FormDescription label="가게 설명" value={description} onChange={onChangeDescription} />
          <FormInputBase
            isRequired
            label="위치정보"
            helper="가게의 위치를 작성 해주세요 :)"
            value={location}
            onChange={onChnageLocation}
          />
          <FormInputBase
            isRequired
            label="도메인"
            helper={`https://dalda.shop/${domain}`}
            value={domain}
            onChange={onChangeDomain}
          />
          <FormLink label="인스타그램 링크" value={instagram} onChange={onChangeInstagram} />
          <FormLink label="오픈채팅 링크" value={openChat} onChange={onChangeOpenChat} />
          <FormLinks
            handleAddLink={handleAddLink}
            link={link}
            links={links}
            onChangeLink={onChangeLink}
            handleDeleteLink={handleDeleteLink}
          />
        </FormControl>
      </div>
    </div>
  )
}

export default EditProfile
