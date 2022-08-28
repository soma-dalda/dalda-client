import {
  Card,
  CardContainer,
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
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <ProfileImage
        src="https://user-images.githubusercontent.com/63512217/180431797-88c715f3-5787-49f6-916e-a5bf7f07f45d.png"
        alt="달다로고"
      />
      <div className="flex flex-col items-center">
        {/* Title */}
        <ProfileTitle>달다</ProfileTitle>
        {/* Description */}
        <ProfileDescription>
          여러분의 달콤한 기념일을 챙겨 드리는 우리는, <b className="text-red-400">달다</b> 입니다
          :)
        </ProfileDescription>
        {/* Icons */}
        <div className="mt-4 flex w-full justify-center gap-3">
          <InstagramIcon />
          <ChatIcon />
          <YoutubeIcon />
        </div>
        {/* 운영시간 */}
        <InfoContainer
          infos={[
            'Days: 월요일 ~ 일요일',
            'Time: 00:00 ~ 24:00',
            '서울 강남구 테헤란로 아남타워 7층',
          ]}
        />
        {/* 사장님 등록 */}
        <TitleMessage
          title="내 가게 프로필을 갖고 싶다면?"
          messages={[
            <Link to="edit">
              <div className="w-full max-w-sm cursor-pointer rounded-lg border py-4 px-3 text-sm font-thin hover:bg-gray-300">
                내 가게 등록 하러가기 🙌
              </div>
            </Link>,
          ]}
        />
        {/* 새롭게 등록된 가게 프로필 */}
        <CardContainer title="새롭게 등록된 가게 프로필 이에요 🍰">
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        {/* 리뷰 */}
        <TitleMessage
          className="mt-0"
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
        <div className="mt-4 w-full">
          <button
            type="button"
            className="w-full rounded-xl bg-blue-500 py-3 font-light text-white hover:bg-blue-400"
          >
            문의하기
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
