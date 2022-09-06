import { CancleButton } from '@/components/atoms'
import React from 'react'
import useTemplateActionContext from '../../hooks/useTemplateActionContext'
import useTemplateValueContext from '../../hooks/useTemplateValueContext'
import CheckBox from '../atoms/CheckBox'

type Props = {
  index: number
}

const TemplateDescriptionQuestion = ({ index }: Props) => {
  const { content } = useTemplateValueContext()
  const { handleDeleteQuestion, handleUpdateQuestionTitle, handleUpdateDetailType } =
    useTemplateActionContext()

  const handleChangeDetailType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      handleUpdateDetailType({ contentIndex: index, detailType: 'shortSubjective' })
    } else {
      handleUpdateDetailType({ contentIndex: index, detailType: 'longSubjective' })
    }
  }

  return (
    <section className="mt-8 flex w-full flex-col">
      <span className="px-2.5 py-1 text-[0.9rem] text-gray-700">입력 사항</span>
      <div className="relative flex w-full flex-col gap-6 rounded-xl border bg-white p-3">
        {/* 질문 삭제 버튼 */}
        <CancleButton className="-top-3" onClick={() => handleDeleteQuestion(index)} />
        {/* 입력사항 타이틀 */}
        <input
          required
          className="w-[90%] border-b p-2"
          placeholder="제목을 작성해주세요."
          value={content[index]?.question}
          onChange={handleUpdateQuestionTitle(index)}
        />
      </div>
      <CheckBox
        id={`설명타입-${index}`}
        type="checkbox"
        onChange={handleChangeDetailType}
        checked={content[index]?.detailType === 'shortSubjective'}
      >
        단답형
      </CheckBox>
    </section>
  )
}

export default React.memo(TemplateDescriptionQuestion)
