import FormControl from '@/features/EditForm/components/FormControl'
import FormInput from '@/features/EditForm/components/FormInput'
import FormLabel from '@/features/EditForm/components/FormLabel'
import React from 'react'

type Props = {
  imgData: string | undefined
  handleUplodaImage: React.ChangeEventHandler<HTMLInputElement>
  label?: string
}

const FormProfileImage = ({ label, handleUplodaImage, imgData }: Props) => {
  return (
    <>
      <FormControl id="profile" className="w-full shrink-0 p-2" isRequired>
        {label && <FormLabel>{label}</FormLabel>}
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
