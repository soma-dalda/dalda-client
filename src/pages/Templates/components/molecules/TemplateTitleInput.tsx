import React from 'react'

const TemplateTitleInput = ({ children, ...props }: JSX.IntrinsicElements['input']) => {
  return (
    <section className="mt-8 flex w-full flex-col">
      <label htmlFor="주문서이름" className="col flex flex-col gap-1">
        <span className="px-2.5 py-1 text-[0.9rem] text-gray-700">{children}</span>
        <input id="주문서이름" className="rounded-xl border p-2.5" {...props} />
      </label>
    </section>
  )
}

export default React.memo(TemplateTitleInput)
