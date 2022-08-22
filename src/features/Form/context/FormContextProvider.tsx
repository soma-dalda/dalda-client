import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { FormContext, FormProviderProps } from '../types'

const defaultValue: FormContext = {}

export const FormContextAPI = createContext(defaultValue)

const FormContextProvider = ({
  children,
  isInvalid,
  isRequired,
  isDisabled,
}: PropsWithChildren<FormProviderProps>) => {
  const providerProps: FormContext = useMemo(
    () => ({
      isInvalid,
      isRequired,
      isDisabled,
    }),
    [isInvalid, isRequired, isDisabled]
  )

  return <FormContextAPI.Provider value={providerProps}>{children}</FormContextAPI.Provider>
}

export default React.memo(FormContextProvider)
