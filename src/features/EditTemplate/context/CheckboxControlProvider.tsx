import React, { createContext, PropsWithChildren, useCallback, useEffect, useMemo } from 'react'
import useHandleTemplate from '../hooks/useHandleTemplate'
import { CheckboxControlContextAPI, Checkbox, CheckboxProviderProps } from '../types'

const defaultCheckbox: Checkbox = ''

const defaultValue: CheckboxControlContextAPI = {
  checkboxs: [],
  addCheckbox: () => {},
  deleteCheckbox: () => {},
  getCheckbox: () => null,
  updateCheckboxValue: () => {},
}

export const CheckboxControl = createContext(defaultValue)

const CheckboxControlProvider = ({
  children,
  checkboxs,
  setCheckboxs,
}: PropsWithChildren<CheckboxProviderProps>) => {
  const { setQuestion } = useHandleTemplate()

  const addCheckbox = useCallback(() => {
    setCheckboxs((prev) => [...prev, defaultCheckbox])
  }, [setCheckboxs])

  const deleteCheckbox = useCallback(
    (id: number) => {
      setCheckboxs((prev) => prev.filter((_, i) => i !== id))
    },
    [setCheckboxs]
  )

  const getCheckbox = useCallback(
    (id: number) => {
      if (!checkboxs?.[id]) {
        return null
      }
      return checkboxs?.[id]
    },
    [checkboxs]
  )

  const updateCheckboxValue = useCallback(
    (id: number, data: { value: string; optionIndex: number }) => {
      setQuestion(id, (params) => {
        return {
          ...params,
          options: params.options?.map((option, index) =>
            index === data.optionIndex ? data.value : option
          ),
        }
      })
    },
    [setQuestion]
  )

  useEffect(() => {
    setCheckboxs((prev) => (prev?.length ? prev : Array(2).fill(defaultCheckbox)))
  }, [setCheckboxs])

  const value: CheckboxControlContextAPI = useMemo(
    () => ({
      checkboxs,
      addCheckbox,
      deleteCheckbox,
      getCheckbox,
      updateCheckboxValue,
    }),
    [checkboxs]
  )

  return <CheckboxControl.Provider value={value}>{children}</CheckboxControl.Provider>
}

export default CheckboxControlProvider
