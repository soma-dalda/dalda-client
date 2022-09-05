import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  outlet?: boolean
  navigtaion?: React.ReactNode
  bottom?: React.ReactNode
}

const Layout = ({ outlet, children, navigtaion, bottom }: PropsWithChildren<Props>) => {
  return (
    <main className="layout relative mx-auto flex min-h-screen flex-col justify-between border bg-background-light">
      <section className="p-4">
        {navigtaion}
        <section className="mt-2 flex w-full flex-col items-center">
          {outlet ? <Outlet /> : children}
        </section>
      </section>
      <div>{bottom}</div>
    </main>
  )
}

export default Layout
