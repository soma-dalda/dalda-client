import React from 'react'

import { FormControl, FormLabel, FormInput } from '@/components/compounds/Form/components'
import { FormBaseProps } from '../../types'

const FormLink = ({ label, value, onChange }: FormBaseProps) => {
  return (
    <FormControl as="div">
      <FormLabel>{label}</FormLabel>
      <FormInput className="w-full" value={value} onChange={onChange} />
    </FormControl>
  )
}

export default React.memo(FormLink)
