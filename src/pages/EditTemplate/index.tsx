import React from 'react'

import CheckboxTemplate from './components/CheckboxTemplate'
import DescriptionTemplate from './components/DescriptionTemplate'

const EditTemplate = () => {
  return (
    <div className="flex w-full flex-col">
      <CheckboxTemplate />
      <DescriptionTemplate />
    </div>
  )
}

export default EditTemplate
