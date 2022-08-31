import React, { useEffect, useState } from 'react'
import useInput from '@/components/compounds/Form/hooks/useInput'
import { FormDay } from '@/components/compounds/Form/components'

const EditDays = () => {
  const [currentOpen, setCurrentOpen] = useState('')
  const [currentEnd, setCurrentEnd] = useState('')

  const [mondayOpen, setMondayOpen, onChangeMondayOpen] = useInput()
  const [mondayEnd, setMondayEnd, onChangeMondayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(mondayOpen)
    setCurrentEnd(mondayEnd)
  }, [mondayOpen, mondayEnd])

  const [tuesdayOpen, setTuesdayOpen, onChangeTuesdayOpen] = useInput()
  const [tuesdayEnd, setTuesdayEnd, onChangeTuesdayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(tuesdayOpen)
    setCurrentEnd(tuesdayEnd)
  }, [tuesdayOpen, tuesdayEnd])

  const [wednesdayOpen, setWednesdayOpen, onChangeWednesdayOpen] = useInput()
  const [wednesdayEnd, setWednesdayEnd, onChangeWednesdayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(wednesdayOpen)
    setCurrentEnd(wednesdayEnd)
  }, [wednesdayOpen, wednesdayEnd])

  const [thursdayOpen, setThursdayOpen, onChangeThursdayOpen] = useInput()
  const [thursdayEnd, setThursdayEnd, onChangeThursdayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(thursdayOpen)
    setCurrentEnd(thursdayEnd)
  }, [thursdayOpen, thursdayEnd])

  const [fridayOpen, setFridayOpen, onChangeFridayOpen] = useInput()
  const [fridayEnd, setFridayEnd, onChangeFridayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(fridayOpen)
    setCurrentEnd(fridayEnd)
  }, [fridayOpen, fridayEnd])

  const [saturdayOpen, setSaturdayOpen, onChangeSaturdayOpen] = useInput()
  const [saturdayEnd, setSaturdayEnd, onChangeSaturdayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(saturdayOpen)
    setCurrentEnd(saturdayEnd)
  }, [saturdayOpen, saturdayEnd])

  const [sundayOpen, setSundayOpen, onChangeSundayOpen] = useInput()
  const [sundayEnd, setSundayEnd, onChangeSundayEnd] = useInput()

  useEffect(() => {
    setCurrentOpen(sundayOpen)
    setCurrentEnd(sundayEnd)
  }, [sundayOpen, sundayEnd])

  useEffect(() => {
    setFridayEnd((prev) => (prev !== '' ? prev : currentEnd))
    setFridayOpen((prev) => (prev !== '' ? prev : currentOpen))

    setMondayOpen((prev) => (prev !== '' ? prev : currentOpen))
    setMondayEnd((prev) => (prev !== '' ? prev : currentEnd))

    setSaturdayOpen((prev) => (prev !== '' ? prev : currentOpen))
    setSaturdayEnd((prev) => (prev !== '' ? prev : currentEnd))

    setSundayEnd((prev) => (prev !== '' ? prev : currentEnd))
    setSundayOpen((prev) => (prev !== '' ? prev : currentOpen))

    setWednesdayOpen((prev) => (prev !== '' ? prev : currentOpen))
    setWednesdayEnd((prev) => (prev !== '' ? prev : currentEnd))

    setThursdayEnd((prev) => (prev !== '' ? prev : currentEnd))
    setThursdayOpen((prev) => (prev !== '' ? prev : currentOpen))

    setTuesdayOpen((prev) => (prev !== '' ? prev : currentOpen))
    setTuesdayEnd((prev) => (prev !== '' ? prev : currentEnd))
  }, [currentOpen, currentEnd])

  return (
    <div className="mt-2 grid w-full grid-cols-1 gap-2 p-2">
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
        <span className="flex justify-center">오픈</span>
        <span className="flex justify-center">마감</span>
      </div>
      <FormDay
        openValue={mondayOpen}
        endValue={mondayEnd}
        onChangeEndValue={onChangeMondayEnd}
        onChangeOpenValue={onChangeMondayOpen}
        id="월"
      >
        월
      </FormDay>
      <FormDay
        openValue={tuesdayOpen}
        endValue={tuesdayEnd}
        onChangeEndValue={onChangeTuesdayEnd}
        onChangeOpenValue={onChangeTuesdayOpen}
        id="화"
      >
        화
      </FormDay>
      <FormDay
        openValue={wednesdayOpen}
        endValue={wednesdayEnd}
        onChangeOpenValue={onChangeWednesdayOpen}
        onChangeEndValue={onChangeWednesdayEnd}
        id="수"
      >
        수
      </FormDay>
      <FormDay
        openValue={thursdayOpen}
        endValue={thursdayEnd}
        onChangeOpenValue={onChangeThursdayOpen}
        onChangeEndValue={onChangeThursdayEnd}
        id="목"
      >
        목
      </FormDay>
      <FormDay
        openValue={fridayOpen}
        endValue={fridayEnd}
        onChangeEndValue={onChangeFridayEnd}
        onChangeOpenValue={onChangeFridayOpen}
        id="금"
      >
        금
      </FormDay>
      <FormDay
        openValue={saturdayOpen}
        endValue={saturdayEnd}
        onChangeEndValue={onChangeSaturdayEnd}
        onChangeOpenValue={onChangeSaturdayOpen}
        id="토"
      >
        토
      </FormDay>
      <FormDay
        openValue={sundayOpen}
        endValue={sundayEnd}
        onChangeEndValue={onChangeSundayEnd}
        onChangeOpenValue={onChangeSundayOpen}
        id="일"
      >
        일
      </FormDay>
    </div>
  )
}

export default EditDays
