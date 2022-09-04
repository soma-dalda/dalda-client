import React from 'react'

type Props = {
  logoPlaceholder?: React.ReactElement
  src?: string | null
}

const Image = React.forwardRef<HTMLImageElement, Omit<JSX.IntrinsicElements['img'], 'src'> & Props>(
  ({ logoPlaceholder = null, alt, src, ...props }, ref) => {
    return src ? <img {...props} src={src} alt={alt} ref={ref} /> : logoPlaceholder
  }
)

export default Image
