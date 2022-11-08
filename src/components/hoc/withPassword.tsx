import React, { ComponentType, useEffect, useState } from 'react'
import useGetUser from '@/hooks/useGetUser'
import { useNavigate } from 'react-router-dom'
import { ModalProvider, useModal } from '@jaewoong2/modal'

type MessageProps = {
  setStatusCancled: () => void
  setStatusLoading: () => void
  flag: boolean
}

const Message = ({ setStatusCancled, setStatusLoading, flag }: MessageProps) => {
  useEffect(() => {
    setStatusLoading()
    return () => {
      if (!flag) {
        setStatusCancled()
      }
    }
  }, [])

  return <p className="text-[1rem]">휴대전화 번호를 등록 하셔야 합니다.</p>
}

const withPassword = (Component: ComponentType) => {
  const Wrapper = <P extends {}>(props: P) => {
    const navigate = useNavigate()
    const { data: user } = useGetUser()
    const [status, setStatus] = useState<'loading' | 'clicked' | 'cancled' | null>(null)

    const { show, hide } = useModal('text', {
      description: null,
      header: null,
      message: (
        <Message
          setStatusCancled={() => setStatus('cancled')}
          setStatusLoading={() => setStatus('loading')}
          flag={Boolean(user?.userPhone)}
        />
      ),
      modalWidth: '350px',
      buttonText: '등록하기',
      buttonType: 'warn',
      onClickButton: () => {
        setStatus('clicked')
        navigate('/configuration')
        hide()
      },
    })

    /* 권한 분기 */
    useEffect(() => {
      if (!user?.userPhone) {
        show()
      } else {
        hide()
        setStatus('clicked')
      }
    }, [user?.userPhone, status])

    // 비밀번호 등록 하지 않은 채로 X 누르거나 메시지를 껐을 때, 다시 보여줌
    useEffect(() => {
      if (status === 'cancled') {
        show()
      }
    }, [status])

    return <Component {...props} />
  }

  const HOC = <P extends {}>(props: P) => {
    return (
      <ModalProvider>
        <Wrapper {...props} />
      </ModalProvider>
    )
  }

  return HOC
}

export default withPassword
