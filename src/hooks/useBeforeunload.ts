import { useEffect } from 'react'

const useBeforeunload = () => {
  useEffect(() => {
    const alert = (e: BeforeUnloadEvent) => {
      e.returnValue =
        '저장하지 않고 페이지를 벗어나려 합니다. \n작성중인 내용은 저장되지 않습니다.;'

      return e.returnValue
    }

    window.onbeforeunload = alert
    return () => {
      window.onbeforeunload = null
    }
  }, [])
}

export default useBeforeunload
