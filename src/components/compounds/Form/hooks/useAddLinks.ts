import { useCallback, useState } from 'react'
import useInput from './useInput'

type UseAddLinks = {
  onSuccess?: (link: string) => void
  onError?: (link: string) => void
}

const useAddLinks = ({ onSuccess, onError }: UseAddLinks) => {
  const [link, setLink, onChangeLink] = useInput()
  const [title, setTitle, onChangeTitle] = useInput()
  const [links, setLinks] = useState<{ title: string; link: string }[]>([])

  const handleAddLink = useCallback(() => {
    if (link.replace(/^\s+|\s+$/g, '') !== '') {
      setLinks((prev) => [...prev, { title, link }])
      setLink('')
      setTitle('')
      if (onSuccess) {
        onSuccess(link)
      }
    } else if (onError) {
      onError(link)
    }
  }, [link, title])

  const handleDeleteLink = useCallback(
    (index: number) => () => {
      setLinks((prev) => prev.filter((_, i) => i !== index))
    },
    []
  )

  return {
    link,
    onChangeLink,
    links,
    handleAddLink,
    handleDeleteLink,
    title,
    setTitle,
    onChangeTitle,
  }
}

export default useAddLinks
