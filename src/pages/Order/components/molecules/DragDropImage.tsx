import React, { DragEventHandler } from 'react'

type Props = {
  onDragEnter: DragEventHandler<HTMLLabelElement>
  onDragLeave: DragEventHandler<HTMLLabelElement>
  onDragOver: DragEventHandler<HTMLLabelElement>
  onDrop: DragEventHandler<HTMLLabelElement>
}

const DragDropImage = ({
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  ...props
}: Props &
  Omit<
    JSX.IntrinsicElements['input'],
    'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'
  >) => {
  return (
    <label
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      htmlFor="image-dragdrop"
      className="mb-10 flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 transition hover:border-gray-400 focus:outline-none"
    >
      <span className="flex w-full items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <span className="font-medium text-gray-600">이미지 업로드</span>
      </span>
      <input id="image-dragdrop" type="file" name="file_upload" className="sr-only" {...props} />
    </label>
  )
}

export default DragDropImage
