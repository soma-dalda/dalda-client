import React, { useCallback, useState } from 'react'

const useUploadImage = () => {
  const [picture, setPicture] = useState<File | null>(null)
  const [imgData, setImgData] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  const handleUplodaImage: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setIsLoading(true)
      const fileList = e.target.files
      if (fileList !== null) {
        setPicture(fileList[0])
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          if (typeof reader.result === 'string') {
            setImgData(reader.result)
          }
        })
        reader.readAsDataURL(fileList[0])
        setIsLoading(false)
      }
    },
    [picture, imgData]
  )

  return { imgData, handleUplodaImage, isLoading }
}

export default useUploadImage
