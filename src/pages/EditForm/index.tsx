import React from 'react'
import FormControl from '@/features/EditForm/components/FormControl'
import useInput from '@/features/EditForm/hooks/useInput'
import useAddLinks from '@/features/EditForm/hooks/useAddLinks'
import useUploadImage from '@/features/EditForm/hooks/useUploadImage'
import { FormProfileImage, FormInputBase, FormDescription, FormLinks, FormLink } from './components'

const EditForm = () => {
  const [domain, , onChangeDomain] = useInput()
  const [name, , onChangeName] = useInput()
  const [instagram, , onChangeInstagram] = useInput()
  const [description, , onChangeDescription] = useInput()
  const [openChat, , onChangeOpenChat] = useInput()
  const { handleAddLink, link, links, onChangeLink, handleDeleteLink } = useAddLinks({})
  const { imgData, handleUplodaImage } = useUploadImage()

  return (
    <div className="flex h-full min-h-[calc(100vh-40px)] w-full flex-col justify-between">
      <div>
        <FormProfileImage
          label="프로필 이미지 등록"
          imgData={imgData}
          handleUplodaImage={handleUplodaImage}
        />
        <FormControl as="form" className="flex w-full shrink-0 flex-col gap-3 p-2">
          <FormInputBase
            label="상호명"
            helper="프로필에 보여줄 가게명을 입력해주세요 :)"
            value={name}
            onChange={onChangeName}
          />
          <FormDescription label="가게 설명" value={description} onChange={onChangeDescription} />
          <FormInputBase
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
      <button
        form="profile"
        type="submit"
        className="w-full rounded-md bg-blue-500 p-3 text-white hover:bg-blue-400"
      >
        확인
      </button>
    </div>
  )
}

export default EditForm
