import React, { createContext, PropsWithChildren, useCallback, useEffect, useMemo } from 'react'
import { CheckboxControlContextAPI, Checkbox, CheckboxProviderProps } from '../types'

const defaultCheckbox: Checkbox = {
  value: '',
  isChecked: false,
  isUpdate: true,
}

const defaultValue: CheckboxControlContextAPI = {
  checkboxs: [],
  addCheckbox: () => {},
  deleteCheckbox: () => {},
  getCheckbox: () => null,
  updateCheckbox: () => {},
  updateCheckboxValue: () => {},
}

export const CheckboxControl = createContext(defaultValue)

const CheckboxControlProvider = ({
  children,
  checkboxs,
  setCheckboxs,
}: PropsWithChildren<CheckboxProviderProps>) => {
  const addCheckbox = useCallback(() => {
    setCheckboxs((prev) => [...prev, defaultCheckbox])
  }, [])

  const deleteCheckbox = useCallback((id: number) => {
    setCheckboxs((prev) => prev.filter((_, i) => i !== id))
  }, [])

  const getCheckbox = useCallback((id: number) => {
    if (!checkboxs[id]) {
      return null
    }
    return checkboxs[id]
  }, [])

  const updateCheckbox = useCallback((id: number) => {
    setCheckboxs((prev) =>
      prev.map((checkbox, i) => (i === id ? { ...checkbox, isUpdate: true } : checkbox))
    )
  }, [])

  const updateCheckboxValue = useCallback((id: number, { value }: Checkbox) => {
    setCheckboxs((prev) =>
      prev.map((checkbox, i) => (i === id ? { ...checkbox, value, isUpdate: false } : checkbox))
    )
  }, [])

  useEffect(() => {
    setCheckboxs(Array(2).fill(defaultCheckbox))
  }, [])

  const value: CheckboxControlContextAPI = useMemo(
    () => ({
      checkboxs,
      addCheckbox,
      deleteCheckbox,
      getCheckbox,
      updateCheckbox,
      updateCheckboxValue,
    }),
    [checkboxs]
  )

  return <CheckboxControl.Provider value={value}>{children}</CheckboxControl.Provider>
}

export default CheckboxControlProvider
