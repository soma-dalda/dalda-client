import { ChangeEventHandler, useCallback, useState } from 'react'

const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>(initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? '')

  const handleCangeValue: ChangeEventHandler<T> = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return [value, setValue, handleCangeValue] as const
}

export default useInput
