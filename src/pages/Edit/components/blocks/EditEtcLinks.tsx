import React from 'react'

import CancleButton from '@/components/atoms/CancleButton'
import { FormControl, FormLabel, FormInput } from '@/components/compounds/Form/components'

import useCompanyEditValue from '../../hooks/useCompanyEditValue'
import useCompanyEditAction from '../../hooks/useCompanyEditAction'

const FormEtcLinks = () => {
  const { etcLinks } = useCompanyEditValue()
  const { deleteEtcLink, addEtcLinks, handleChangeLink, handleChangeTitle } = useCompanyEditAction()

  return (
    <>
      {etcLinks?.slice(0, etcLinks.length - 1)?.map((value, index) => (
        <FormControl key={`links-${+index}`} className="relative" as="div" isDisabled>
          <FormLabel>{value.title}✓</FormLabel>
          <FormInput className="w-full" value={value.link} />
          <div className="flex w-full justify-end">
            <CancleButton onClick={deleteEtcLink(index)} />
          </div>
        </FormControl>
      ))}
      {etcLinks && etcLinks[etcLinks.length - 1] && (
        <FormControl as="div" className="flex w-full flex-col">
          <FormLabel>링크</FormLabel>
          <div className="flex w-full gap-3">
            <FormInput
              placeholder="링크제목"
              className="w-[100px]"
              value={etcLinks[etcLinks.length - 1].title ?? ''}
              onChange={handleChangeTitle}
            />
            <FormInput
              placeholder="추가하실 링크를 작성해주세요"
              className="w-[calc(100%-100px)]"
              value={etcLinks[etcLinks.length - 1].link ?? ''}
              onChange={handleChangeLink}
            />
          </div>
        </FormControl>
      )}
      <button
        form="profile"
        onClick={addEtcLinks}
        type="submit"
        className="mx-auto w-full rounded-xl bg-point-700 p-3 text-white hover:bg-point-500"
      >
        링크 추가
      </button>
    </>
  )
}

export default React.memo(FormEtcLinks)
