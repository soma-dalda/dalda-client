import { useAppSelector, useAppDispatch } from '@/store/config'
import { useCallback } from 'react'
import { updateDetailType, updateQuestionTitle, deleteQuestion } from '../slice/templateSlice'

const useDescriptionQuestion = ({ index, id }: { index: number; id: string }) => {
  const templates = useAppSelector((state) => state.template)
  const template = templates.find((v) => v.id === id)
  const dispatch = useAppDispatch()

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(updateDetailType({ id, index, detailType: 'shortSubjective' }))
      } else {
        dispatch(updateDetailType({ id, index, detailType: 'longSubjective' }))
      }
    },
    [index, id]
  )

  const handleChangeQuestionTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateQuestionTitle({ id, index, title: e.target.value }))
    },
    [index, id]
  )

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(deleteQuestion({ id, index }))
  }, [index, id])

  return {
    handleCheckboxChange,
    handleChangeQuestionTitle,
    handleDeleteButtonClick,
    descriptionQuestion: template?.content[index],
  }
}

export default useDescriptionQuestion
