import React from 'react'

type Props = {
  buttons: React.ReactNode[]
  divider?: boolean
}

const FormNavigationWithDivider = ({ buttons, divider = true }: Props) => {
  console.log(buttons)
  return (
    <div className="my-6 flex w-full items-center justify-start gap-2 border-b p-3 px-2 text-sm">
      {buttons.map((button, i) => (
        <React.Fragment key={`navigtaion.button${+i}`}>
          {button}
          {divider && i + 1 !== buttons.length && (
            <div className="flex h-[0.75em] w-[1px] bg-grayScale-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default FormNavigationWithDivider
