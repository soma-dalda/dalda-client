import React from 'react'
import FormControl from '@/features/Form/components/FormControl'
import FormHelper from '@/features/Form/components/FormHelper'
import FormInput from '@/features/Form/components/FormInput'
import FormLabel from '@/features/Form/components/FormLabel'
import useInput from '@/features/Form/hooks/useInput'
import useUploadImage from '@/features/Form/hooks/useUploadImage'
import FormTextarea from '@/features/Form/components/FormTextArea'
import useAddLinks from '@/features/Form/hooks/useAddLinks'

const Form = () => {
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
        <FormControl id="profile" className="w-full shrink-0 p-2" isRequired>
          <FormLabel>프로필 이미지 등록</FormLabel>
          <FormInput
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none "
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={handleUplodaImage}
          />
        </FormControl>
        <div className="flex w-full justify-center overflow-hidden ">
          <img
            className={`${imgData ? '' : 'hidden'} aspect-square w-1/2 rounded-full p-2`}
            alt="preview"
            src={imgData}
          />
        </div>
        <FormControl as="form" className="flex w-full shrink-0 flex-col gap-3 p-2">
          <FormControl as="div" isRequired>
            <FormLabel>가게명</FormLabel>
            <FormInput className="w-full" value={name} onChange={onChangeName} />
            <FormHelper variant="normal">프로필에 보여줄 가게명을 입력해주세요 :)</FormHelper>
          </FormControl>
          <FormControl as="div" isRequired>
            <FormLabel>가게 설명</FormLabel>
            <FormTextarea
              value={description}
              onChange={onChangeDescription}
              rows={4}
              placeholder="프로필에 보여줄 가게에 대한 설명이 필요해요 :)"
            />
          </FormControl>
          <FormControl as="div" isRequired>
            <FormLabel>도메인</FormLabel>
            <FormInput className="w-full" value={domain} onChange={onChangeDomain} />
            <FormHelper variant="normal">https://dalda.shop/{domain}</FormHelper>
          </FormControl>
          <FormControl as="div">
            <FormLabel>인스타그램 링크</FormLabel>
            <FormInput className="w-full" value={instagram} onChange={onChangeInstagram} />
          </FormControl>
          <FormControl as="div">
            <FormLabel>오픈채팅 링크</FormLabel>
            <FormInput className="w-full" value={openChat} onChange={onChangeOpenChat} />
          </FormControl>
          {links?.map((value, index) => (
            <FormControl key={`links-${+index}`} as="div" isDisabled>
              <FormLabel>링크 ✓</FormLabel>
              <FormInput className="w-full" value={value} />
              <div className="flex w-full justify-end">
                <button
                  type="button"
                  className="pt-2 text-xs text-red-500"
                  onClick={handleDeleteLink(index)}
                >
                  삭제
                </button>
              </div>
            </FormControl>
          ))}
          <FormControl as="div">
            <FormLabel>링크</FormLabel>
            <FormInput className="w-full" value={link} onChange={onChangeLink} />
          </FormControl>
          <button
            type="button"
            onClick={handleAddLink}
            className="w-1/3 rounded-md bg-gray-500 p-3 text-sm text-white hover:bg-gray-400"
          >
            링크 추가
          </button>
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

export default Form
