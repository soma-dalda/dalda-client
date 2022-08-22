import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="flex aspect-square h-auto w-[40%] flex-shrink-0 flex-col items-center rounded-lg border p-3">
      <div className="botder flex h-full w-full items-center justify-center rounded-full bg-violet-50 p-2">
        🍫
      </div>
      <h2 className="mt-2 text-xs font-light">초코 케이크</h2>
      <button
        type="button"
        className="mt-2 w-full rounded-lg bg-blue-500 px-2 py-3 text-xs font-light text-white hover:bg-blue-400"
      >
        <Link to="/초코케이크">바로가기</Link>
      </button>
    </div>
  )
}

export default Card
