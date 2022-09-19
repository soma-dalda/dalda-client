import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import useHandleImage from '@/hooks/useHandleImage'
import React from 'react'
import useOrderActionContext from '../../hooks/useOrderActionContext'
import DragDropImage from '../molecules/DragDropImage'
import OrderBottomLink from '../molecules/OrderBottomLink'
import QuestionLayout from '../molecules/QuestionLayout'

const OrderInit = () => {
  const { handleAddImage } = useOrderActionContext()
  const { handleDragIn, handleDragOut, handleDragOver, handleDrop, handleChangeImage, name } =
    useHandleImage({
      onSuccess: (data) => {
        handleAddImage(data.url)
      },
    })

  return (
    <Layout navigtaion={<NavigationWithArrow>이미지 선택</NavigationWithArrow>}>
      <QuestionLayout title="원하시는 케이크 사진을 등록 해주세요 :)">
        <p className="flex w-full justify-end text-sm">등록된 이미지: {name}</p>
        <DragDropImage
          onChange={handleChangeImage}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <OrderBottomLink active to="answer#0">
          다음
        </OrderBottomLink>
      </QuestionLayout>
    </Layout>
  )
}

export default OrderInit
