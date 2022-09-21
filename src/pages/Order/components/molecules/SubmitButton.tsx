import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

const getActiveStyle = (active?: boolean) => {
  return active ? 'bg-brand-500' : 'bg-brand-300'
}

const SubmitButton = ({
  children,
  className,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements['button']>) => {
  return (
    <button
      type="button"
      className={clsx(
        getActiveStyle(!props.disabled),
        className,
        `mt-5 flex w-full items-center justify-center rounded-xl p-4 text-white hover:bg-brand-300`
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default SubmitButton
