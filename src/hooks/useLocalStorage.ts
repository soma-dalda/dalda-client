import { useEffect, useState } from 'react'

const useLocalStorage = <T = string>(key: string, initialValue?: T) => {
  const [storeValue, setStoreValue] = useState<T>()

  useEffect(() => {
    if (typeof window === 'undefined') {
      setStoreValue(initialValue)
    }
    try {
      const prevValue = window.localStorage.getItem(key)
      if (prevValue) {
        setStoreValue(JSON.parse(prevValue))
      } else {
        setStoreValue(initialValue)
      }
    } catch (err) {
      setStoreValue(initialValue)
    }
  }, [])

  const setValue = (data: T | ((val?: T) => T)) => {
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

  return [storeValue, setValue] as const
}

export default useLocalStorage
