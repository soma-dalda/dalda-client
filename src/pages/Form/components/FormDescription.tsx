import React from 'react'

import FormControl from '@/features/Form/components/FormControl'
import FormLabel from '@/features/Form/components/FormLabel'
import FormTextArea from '@/features/Form/components/FormTextArea'

import { FormBaseProps } from '../types'

const FormDescription = ({ label, value, onChange }: FormBaseProps) => {
  return (
    <FormControl as="div" isRequired>
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
