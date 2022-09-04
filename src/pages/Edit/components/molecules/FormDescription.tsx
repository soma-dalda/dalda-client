import React from 'react'

import { FormControl, FormLabel, FormTextArea } from '@/components/compounds/Form/components'

import { FormBaseProps } from '../../types'

const FormDescription = ({ label, value, isError, onChange }: FormBaseProps) => {
  return (
    <FormControl isError={isError} as="div" isRequired>
      <FormLabel>{label}</FormLabel>
      <FormTextArea
        value={value}
        onChange={onChange}
        rows={4}
        placeholder="프로필에 보여줄 가게에 대한 설명이 필요해요 :)"
      />
    </FormControl>
  )
}

export default React.memo(FormDescription)
