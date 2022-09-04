import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  active?: boolean
  to: string
}

const ActiveLink = React.forwardRef<HTMLAnchorElement, Props & JSX.IntrinsicElements['a']>(
  ({ active, className, children, to, ...props }, ref) => {
    return (
      <Link
        to={to}
        className={clsx(active && 'text-brand-500', className)}
        type="button"
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    )
  }
)

export default ActiveLink
