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
      {etcLinks &&
        etcLinks.map((etcLink, index) => (
          <FormControl as="div" className="relative flex w-full flex-col">
            <FormLabel>링크</FormLabel>
            <div className="flex w-full gap-3">
              <FormInput
                placeholder="링크제목"
                className="w-[100px]"
                value={etcLink.title ?? ''}
                onChange={handleChangeTitle(index)}
              />
              <FormInput
                placeholder="추가하실 링크를 작성해주세요"
                className="w-[calc(100%-100px)]"
                value={etcLink.link ?? ''}
                onChange={handleChangeLink(index)}
              />
            </div>
            <div className="flex w-full justify-end">
              <CancleButton onClick={deleteEtcLink(index)} />
            </div>
          </FormControl>
        ))}
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
