import useHandleImage from '@/hooks/useHandleImage'
import React from 'react'
import DomainProfileImage from '../molecules/DomainProfileImage'

type Props = {
  src?: string
}

const DomainProfileImageUpload = ({ src }: Props) => {
  const { isLoading, handleChangeImage } = useHandleImage()

  return (
    <form>
      <label htmlFor="image">
        <DomainProfileImage isLoading={isLoading} src={src} />
        <input
          className="hidden"
          id="image"
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
        />
      </label>
    </form>
  )
}

export default DomainProfileImageUpload
