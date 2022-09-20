import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaTag = () => {
  return (
    <Helmet>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Helmet>
  )
}

export default MetaTag
