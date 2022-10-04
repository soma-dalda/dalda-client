import React from 'react'
import { Link } from 'react-router-dom'

const url = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/

const Anchor = React.forwardRef<HTMLAnchorElement, JSX.IntrinsicElements['a']>(
  ({ children, href, ...props }, ref) => {
    if (href?.match(url)) {
      return (
        <a target="_self" rel="noreferrer" {...props} href={href} ref={ref}>
          {children}
        </a>
      )
    }

    return (
      <Link to={href ?? ''} {...props} ref={ref}>
        {children}
      </Link>
    )
  }
)

export default Anchor
