import useHelmet from '@/hooks/useHelmet'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaTag = () => {
  const { helmet } = useHelmet()

  return (
    <Helmet>
      <title>{helmet.title}</title>
      <meta name="description" content={helmet.description} />
      <meta name="keywords" content={helmet.keywords.join(',')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={helmet.title} />
      <meta property="og:description" content={helmet.description} />
      <meta property="og:image" content={helmet.thumbnail} />
      <meta property="og:url" content={helmet.url} />
    </Helmet>
  )
}

export default MetaTag
