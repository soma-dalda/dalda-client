import React from 'react'

import FormControl from '@/features/EditForm/components/FormControl'
import FormInput from '@/features/EditForm/components/FormInput'
import FormLabel from '@/features/EditForm/components/FormLabel'

import { FormBaseProps } from '../types'

const FormLink = ({ label, value, onChange }: FormBaseProps) => {
  return (
    <FormControl as="div">
      <FormLabel>{label}</FormLabel>
      <FormInput className="w-full" value={value} onChange={onChange} />
    </FormControl>
  )
}

export default React.memo(FormLink)
