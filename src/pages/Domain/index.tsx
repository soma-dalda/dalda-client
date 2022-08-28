import React from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  ChatIcon,
  InfoContainer,
  InstagramIcon,
  ProfileDescription,
  ProfileImage,
  ProfileTitle,
  ReviewItem,
  TitleMessage,
  YoutubeIcon,
} from '@/components'
import SliceCakeIcon from '@/components/icons/SliceCakeIcon'
import useDomainRequest from './hooks/useDomainRequest'

const Domain = () => {
  const { domain } = useParams()
  const { data: company } = useDomainRequest(domain, {
    onSuccess: (data) => {
      if (data.orders.length > 0) {
        alert('주문서 도착!')
      }
    },
  })

  return (
    <>
      <ProfileImage src={company?.profileImg} alt="로고" className="max-x-full" />
      <div className="flex flex-col items-center">
        {/* Title */}
        <ProfileTitle key={domain}>{company?.title}</ProfileTitle>
        {/* Description */}
        <ProfileDescription className="break-all">
          Make Cake For Family, Friends, Importatnt Peron
          <b className="px-2 text-red-400">{company?.title}</b>
          Provide.
        </ProfileDescription>
        {/* Icons */}
        <div className="mt-4 flex w-full justify-center gap-3">
          <InstagramIcon />
          <ChatIcon />
          <YoutubeIcon />
        </div>
        {/* 운영시간 */}
        <InfoContainer
          infos={['Days: 월요일 ~ 금요일', 'Time: 12:00 ~ 09:00', '서울 강남구 압구정동 124-5']}
        />
        {/* 사장님 등록 */}
        <TitleMessage
          title=""
          messages={
            company?.templates.map((template) => (
              <Link to={`order/${template.id}`} className="mt-2">
                <div className="flex w-full max-w-sm cursor-pointer items-center gap-2 rounded-2xl border border-brand-300 py-4 px-3 text-sm font-semibold  text-brand-500 hover:bg-brand-100">
                  <SliceCakeIcon />
                  {template.title}
                </div>
              </Link>
            )) ?? []
          }
        />
        {/* 리뷰 */}
        <TitleMessage
          className="mt-2 mb-4"
          title="리뷰 확인"
          messages={[
            <div className="flex max-h-[250px] min-h-[100px] w-full flex-col gap-y-3 overflow-y-scroll rounded-lg border border-brand-300 p-5">
              <ReviewItem nickname="🍡">친절한 케이크 집이였어요! 초코맛 짱</ReviewItem>
              <ReviewItem nickname="🍡">친절한 케이크 집이였어요! 초코맛 짱</ReviewItem>
              <ReviewItem nickname="🍡">친절한 케이크 집이였어요! 초코맛 짱</ReviewItem>
              <ReviewItem nickname="🍡">친절한 케이크 집이였어요! 초코맛 짱</ReviewItem>
              <ReviewItem nickname="🍡">친절한 케이크 집이였어요! 초코맛 짱</ReviewItem>
            </div>,
          ]}
        />

        {/* 문의 하기 */}
        <div className="w-full">
          <Link to="templates">
            <button
              type="button"
              className="w-full rounded-xl bg-point-700 py-3 font-light text-white hover:bg-point-500"
            >
              주문 폼 관리 하기
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Domain
