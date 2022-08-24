import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

type Props = {
  outlet?: boolean
}

const Layout = ({ outlet, children }: PropsWithChildren<Props>) => {
  return (
    <main className="layout mx-auto flex min-h-screen flex-col border bg-white">
      <Navigation />
      <section className="flex flex-col items-center gap-5">
        {outlet ? <Outlet /> : children}
      </section>
    </main>
  )
}

export default Layout
