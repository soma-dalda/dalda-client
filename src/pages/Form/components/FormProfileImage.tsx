import FormControl from '@/features/Form/components/FormControl'
import FormInput from '@/features/Form/components/FormInput'
import FormLabel from '@/features/Form/components/FormLabel'
import React from 'react'

type Props = {
  imgData: string | undefined
  handleUplodaImage: React.ChangeEventHandler<HTMLInputElement>
}

const FormProfileImage = ({ handleUplodaImage, imgData }: Props) => {
  return (
    <>
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
    </>
  )
}

export default React.memo(FormProfileImage)
