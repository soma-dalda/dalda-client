import React from 'react'

type Props = {
  imgData: string | undefined
  handleUplodaImage: React.ChangeEventHandler<HTMLInputElement>
}

const FormImageUpload = ({ handleUplodaImage, imgData }: Props) => {
  return (
    <div className="m-2">
      <input
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={handleUplodaImage}
      />
      <div className="flex w-full justify-center overflow-hidden ">
        <img
          className={`${imgData ? '' : 'hidden'} aspect-square w-1/2 rounded-full p-2`}
          alt="preview"
          src={imgData}
        />
      </div>
    </div>
  )
}

export default React.memo(FormImageUpload)
