import React from 'react'

type Props = {
  infos: string[]
}

const InfoContainer = ({ infos }: Props) => {
  return (
    <div className="mt-5 w-fit min-w-[300px] max-w-sm rounded-lg border py-4 px-3 text-sm font-thin">
      {infos.map((info, i) => (
        <p className="mt-1" key={`information${+i}`}>
          {info}
        </p>
      ))}
    </div>
  )
}

export default InfoContainer
