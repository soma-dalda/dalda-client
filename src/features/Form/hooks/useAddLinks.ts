import { useCallback, useState } from 'react'
import useInput from './useInput'

type UseAddLinks = {
  onSuccess?: (link: string) => void
  onError?: (link: string) => void
}

const useAddLinks = ({ onSuccess, onError }: UseAddLinks) => {
  const [link, setLink, onChangeLink] = useInput()
  const [links, setLinks] = useState<string[]>([])

  const handleAddLink = useCallback(() => {
    if (link.replace(/^\s+|\s+$/g, '') !== '') {
      setLinks((prev) => [...prev, link])
      setLink('')
      if (onSuccess) {
        onSuccess(link)
      }
    } else if (onError) {
      onError(link)
    }
  }, [link])

  const handleDeleteLink = useCallback(
    (index: number) => () => {
      setLinks((prev) => prev.filter((_, i) => i !== index))
    },
    []
  )

  return { link, onChangeLink, links, handleAddLink, handleDeleteLink }
}

export default useAddLinks
