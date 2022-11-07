import { useEffect, useState } from 'react'

const useLocalStorage = <T = string>(key: string, initialValue: T | string = '') => {
  const [storeValue, setStoreValue] = useState<T | string>()
  const [isLoading, setIsLoading] = useState(true)

  const setValue = (data: string | T | ((val?: T | string) => T)) => {
    const value = data instanceof Function ? data(storeValue) : data

    setStoreValue(value)

    if (typeof window !== 'undefined') {
      if (typeof value === 'string') {
        window.localStorage.setItem(key, value)
      } else {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    }
  }

  const refetch = () => {
    setIsLoading(true)
    if (typeof window === 'undefined') {
      setValue(initialValue)
    }
    try {
      const prevValue = window.localStorage.getItem(key)
      if (prevValue) {
        if (typeof prevValue === 'string') {
          setValue(prevValue)
        } else {
          setValue(JSON.parse(prevValue))
        }
      } else {
        setValue(initialValue)
      }
    } catch (err) {
      setValue(initialValue)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    refetch()
  }, [window.localStorage])

  return [storeValue, setValue, refetch, isLoading] as const
}

export default useLocalStorage
