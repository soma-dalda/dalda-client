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

const Domain = () => {
  const { domain } = useParams()

  return (
    <>
      <ProfileImage
        src="https://picsum.photos/seed/picsum/200/300"
        alt="로고"
        className="max-x-full"
      />
      <div className="flex flex-col items-center">
        {/* Title */}
        <ProfileTitle>{domain}</ProfileTitle>
        {/* Description */}
        <ProfileDescription className="break-all">
          Make Cake For Family, Friends, Importatnt Peron
          <b className="px-2 text-red-400">{domain}</b>
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
          title="주문제작 케이크를 제작 하고 싶으세요?"
          messages={[
            <div className="w-full max-w-sm cursor-pointer rounded-lg border py-4 px-3 text-sm font-thin hover:bg-gray-300">
              기본 주문제작 폼📝
            </div>,
            <div className="mt-2 w-full max-w-sm cursor-pointer rounded-lg border py-4 px-3 text-sm font-thin hover:bg-gray-300">
              특별 주문제작 폼📝
            </div>,
          ]}
        />
        {/* 리뷰 */}
        <TitleMessage
          className="mt-2 mb-4"
          title="리뷰 확인"
          messages={[
            <div className="flex max-h-[250px] min-h-[100px] w-full flex-col gap-y-3 overflow-y-scroll rounded-lg border p-5">
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
          <Link to="template">
            <button
              type="button"
              className="w-full rounded-xl bg-blue-500 py-3 font-light text-white hover:bg-blue-400"
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
