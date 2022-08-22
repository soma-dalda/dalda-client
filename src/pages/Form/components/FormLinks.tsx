import FormControl from '@/features/Form/components/FormControl'
import FormInput from '@/features/Form/components/FormInput'
import FormLabel from '@/features/Form/components/FormLabel'
import React from 'react'

type Props = {
  link: string
  onChangeLink: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  links: string[]
  handleAddLink: () => void
  handleDeleteLink: (index: number) => () => void
}

const FormLinks = ({ link, onChangeLink, links, handleAddLink, handleDeleteLink }: Props) => {
  return (
    <>
      {links?.map((value, index) => (
        <FormControl key={`links-${+index}`} as="div" isDisabled>
          <FormLabel>링크 ✓</FormLabel>
          <FormInput className="w-full" value={value} />
          <div className="flex w-full justify-end">
            <button
              type="button"
              className="pt-2 text-xs text-red-500"
              onClick={handleDeleteLink(index)}
            >
              삭제
            </button>
          </div>
        </FormControl>
      ))}
      <FormControl as="div">
        <FormLabel>링크</FormLabel>
        <FormInput className="w-full" value={link} onChange={onChangeLink} />
      </FormControl>
      <button
        type="button"
        onClick={handleAddLink}
        className="w-1/3 rounded-md bg-gray-500 p-3 text-sm text-white hover:bg-gray-400"
      >
        링크 추가
      </button>
    </>
  )
}

export default React.memo(FormLinks)
