import dayjs from 'dayjs'

dayjs.locale('ko')

export function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1
  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus))
      })[0] || null
  )
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export function useCurrentQueryString(url: string) {
  const searchParams = new URLSearchParams(url)

  return {
    getCurrentQueryString: (key: string) => searchParams.get(key),
  }
}

export const getDateTime = (date: Date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split('.')[0]
    .substring(0, 16)
}
export function timeForToday(value: Date | string) {
  const today = new Date()
  const timeValue = new Date(value)

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60)
  if (betweenTime < 1) return '방금전'
  if (betweenTime < 60) {
    return `${betweenTime}분전`
  }

  const betweenTimeHour = Math.floor(betweenTime / 60)
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`
  }

  return dayjs(value).format('YY.MM/DD')
}
