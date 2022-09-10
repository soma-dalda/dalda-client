import React from 'react'

import {
  FormControl,
  FormLabel,
  FormInput,
  FormHelper,
} from '@/components/compounds/Form/components'

import { FormBaseProps } from '../../types'

const FormInputBase = ({
  label,
  value,
  onChange,
  helper,
  isError,
  isDisabled,
  isInvalid,
  isRequired,
}: FormBaseProps & { helper?: string }) => {
  return (
    <FormControl
      as="div"
      className="flex flex-col"
      {...{ isDisabled, isInvalid, isRequired, isError }}
    >
      <FormLabel className="mb-2">{label}</FormLabel>
      <FormInput className="w-full" value={value} onChange={onChange} />
      <FormHelper variant="normal">{helper}</FormHelper>
    </FormControl>
  )
}

export default React.memo(FormInputBase)
