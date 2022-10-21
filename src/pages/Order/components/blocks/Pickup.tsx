import React from 'react'
import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import { FormControl, FormInput, FormLabel } from '@/components/compounds/Form/components'
import { getDateTime } from '@/utils'
import QuestionLayout from '../molecules/QuestionLayout'
import SubmitButton from '../molecules/SubmitButton'
import useOrderValueContext from '../../hooks/useOrderValueContext'
import useOrderActionContext from '../../hooks/useOrderActionContext'

const Pickup = () => {
  const { order } = useOrderValueContext()
  const { handlePickupdate, handleSubmit, handlePickupPhoneNumber } = useOrderActionContext()

  return (
    <Layout navigtaion={<NavigationWithArrow>제출 전 확인</NavigationWithArrow>}>
      <QuestionLayout title="제출 전에 확인 해주세요">
        <FormControl
          isRequired
          className=""
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <FormControl as="div" isRequired className="mt-5">
            <FormLabel className="p-1">픽업 날짜</FormLabel>
            <FormInput
              className="bordere flex w-full justify-between rounded-xl p-3"
              value={order?.pickupDate ?? getDateTime(new Date())}
              type="datetime-local"
              onChange={handlePickupdate}
              min={getDateTime(new Date())}
            />
          </FormControl>
          <FormControl as="div" isRequired className="mt-5">
            <FormLabel className="">픽업전에 연락 받을 번호를 작성해주세요</FormLabel>
            <FormInput
              className="bordere flex w-full justify-between rounded-xl p-3"
              value={order?.pickupNoticePhone ?? ''}
              onChange={handlePickupPhoneNumber}
              placeholder="01012345678"
              type="text"
            />
          </FormControl>
          <SubmitButton type="submit" disabled={false}>
            제출
          </SubmitButton>
        </FormControl>
      </QuestionLayout>
    </Layout>
  )
}

export default Pickup
