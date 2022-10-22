import useHandleImage from '@/hooks/useHandleImage'
import React from 'react'
import useGetCompanyRequest from '../../hooks/useGetCompanyRequest'
import usePatchProfileImage from '../../hooks/usePatchProfileImage'
import DomainProfileImage from '../molecules/DomainProfileImage'

type Props = {
  src?: string
}

const DomainProfileImageUpload = ({ src }: Props) => {
  const { refetch } = useGetCompanyRequest({ enabled: false })
  const { mutate: patchProfileImage } = usePatchProfileImage({
    onSuccess: () => {
      refetch()
    },
  })
  const { isLoading, handleChangeImage } = useHandleImage({
    onSuccess: (data) => {
      patchProfileImage({
        imageUrl: data.url,
      })
    },
  })

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
