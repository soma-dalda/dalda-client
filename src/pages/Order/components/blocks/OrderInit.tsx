import { Layout } from '@/components'
import { NavigationWithArrow } from '@/components/blocks'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DragDropImage from '../molecules/DragDropImage'
import OrderBottom from '../molecules/OrderBottom'

const OrderInit = () => {
  const navigate = useNavigate()

  return (
    <Layout navigtaion={<NavigationWithArrow>이미지 선택</NavigationWithArrow>}>
      <DragDropImage />
      <OrderBottom active onClick={() => navigate(`answer`)}>
        다음
      </OrderBottom>
    </Layout>
  )
}

export default OrderInit
