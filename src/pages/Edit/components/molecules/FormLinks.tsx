import React from 'react'
import { FormControl, FormLabel, FormInput } from '@/components/compounds/Form/components'
import CancleButton from '@/components/atoms/CancleButton'

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
        <FormControl key={`links-${+index}`} className="relative" as="div" isDisabled>
          <FormLabel>링크 ✓</FormLabel>
          <FormInput className="w-full" value={value} />
          <div className="flex w-full justify-end">
            <CancleButton onClick={handleDeleteLink(index)} />
          </div>
        </FormControl>
      ))}
      <FormControl as="div">
        <FormLabel>링크</FormLabel>
        <FormInput className="w-full" value={link} onChange={onChangeLink} />
      </FormControl>
      <button
        form="profile"
        onClick={handleAddLink}
        type="submit"
        className="mx-auto w-full rounded-xl bg-point-700 p-3 text-white hover:bg-point-500"
      >
        링크 추가
      </button>
    </>
  )
}

export default React.memo(FormLinks)
