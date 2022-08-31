import clsx from 'clsx'
import React from 'react'
import { FormProviderProps } from '../types/index'

export const getBorderColor = (
  isInvalid?: boolean
): React.HTMLAttributes<HTMLElement>['className'] => {
  return isInvalid
    ? 'border-red-400 focus:outline-red-400'
    : 'border-gray-300 focus:outline-blue-300'
}

export const getDisabledStyle = (isDisabled?: boolean) => {
  return isDisabled ? 'cursor-not-allowed disabled:cursor-not-allowed text-gray-800' : ''
}

export const getHelperColor = (isInvalid?: boolean) => {
  if (!isInvalid) {
    return 'text-green-600'
  }

  return 'text-red-600'
}

export const getHelperColorByVariant = (variant?: 'success' | 'error' | 'normal') => {
  if (variant === 'success') {
    return 'text-green-600'
  }

  if (variant === 'error') {
    return 'text-red-600'
  }

  return 'text-gray-500'
}

export const getStyleByProps = ({ isDisabled, isInvalid }: FormProviderProps) => {
  return `${clsx(getBorderColor(isInvalid), getDisabledStyle(isDisabled))}`
}
