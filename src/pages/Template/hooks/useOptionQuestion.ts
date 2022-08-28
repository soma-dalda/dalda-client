import { useAppDispatch, useAppSelector } from '@/store/config'
import { useCallback, useMemo } from 'react'
import {
  updateDetailType,
  updateOptionByOptionIndex,
  deleteOptionByOptionIndex,
  updateQuestionTitle,
  addOption,
  deleteQuestion,
} from '../slice/templateSlice'

const useOptionQuestion = ({ index, id }: { index: number; id: string }) => {
  const templates = useAppSelector((state) => state.template)
  const template = templates.find((v) => v.id === id)
  const dispatch = useAppDispatch()

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(updateDetailType({ id, index, detailType: 'singleObjective' }))
      } else {
        dispatch(updateDetailType({ id, index, detailType: 'multiObjective' }))
      }
    },
    [index, id]
  )

  const handleChangeOption = useCallback(
    (optionIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateOptionByOptionIndex({
          id,
          index,
          optionIndex,
          option: e.target.value,
        })
      )
    },
    [index, id]
  )

  const handleClickOptionDeleteButton = useCallback(
    (optionIndex: number) => {
      dispatch(deleteOptionByOptionIndex({ id, index, optionIndex }))
    },
    [index, id]
  )

  const handleChangeQuestionTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateQuestionTitle({ id, index, title: e.target.value }))
    },
    [index, id]
  )

  const handleClickAddOptionButton = useCallback(() => {
    dispatch(
      addOption({
        index,
        id,
      })
    )
  }, [index, id])

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(deleteQuestion({ id, index }))
  }, [index, id])

  const optionQuestion = useMemo(() => {
    const question = template?.content[index]
    if (question?.type === 'option') {
      return question
    }
    return null
  }, [template])

  return {
    handleCheckboxChange,
    handleChangeOption,
    handleClickOptionDeleteButton,
    handleChangeQuestionTitle,
    handleDeleteButtonClick,
    handleClickAddOptionButton,
    optionQuestion,
  }
}

export default useOptionQuestion
