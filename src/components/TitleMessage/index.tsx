import React, { PropsWithChildren } from 'react'

type Props = {
  title: string
  messages: React.ReactNode[]
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const TitleMessage = ({ title, messages, className, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className={`mt-5 flex min-w-[300px] flex-col gap-1 ${className}`} {...props}>
      <p className="px-2 pb-1 text-sm font-thin">{title}</p>
      <div>
        {messages.map((message, i) => (
          <span key={`message-${+i}`}>{message}</span>
        ))}
      </div>
    </div>
  )
}

export default TitleMessage
