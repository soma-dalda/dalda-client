import FormControl from '@/features/Form/components/FormControl'
import FormHelper from '@/features/Form/components/FormHelper'
import FormInput from '@/features/Form/components/FormInput'
import FormLabel from '@/features/Form/components/FormLabel'
import React from 'react'
import { FormBaseProps } from '../types'

const FormName = ({ label, value, onChange, helper }: FormBaseProps & { helper?: string }) => {
  return (
    <FormControl as="div" isRequired>
      <FormLabel>{label}</FormLabel>
      <FormInput className="w-full" value={value} onChange={onChange} />
      <FormHelper variant="normal">{helper}</FormHelper>
    </FormControl>
  )
}

export default React.memo(FormName)
