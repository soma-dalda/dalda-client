import React, { forwardRef, PropsWithChildren } from 'react'

type Props = JSX.IntrinsicElements['input']

const QuestionOption = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  ({ className, id, children, ...props }, ref) => {
    return (
      <label htmlFor={id} className="flex w-full border-b">
        <input id={id} className={`w-full p-2 ${className}`} {...props} ref={ref} />
        {children}
      </label>
    )
  }
)

export default React.memo(QuestionOption)
