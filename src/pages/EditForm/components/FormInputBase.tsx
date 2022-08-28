import FormControl from '@/features/EditForm/components/FormControl'
import FormHelper from '@/features/EditForm/components/FormHelper'
import FormInput from '@/features/EditForm/components/FormInput'
import FormLabel from '@/features/EditForm/components/FormLabel'
import React from 'react'
import { FormBaseProps } from '../types'

const FormInputBase = ({ label, value, onChange, helper }: FormBaseProps & { helper?: string }) => {
  return (
    <FormControl as="div" isRequired>
      <FormLabel>{label}</FormLabel>
      <FormInput className="w-full" value={value} onChange={onChange} />
      <FormHelper variant="normal">{helper}</FormHelper>
    </FormControl>
  )
}

export default React.memo(FormInputBase)
