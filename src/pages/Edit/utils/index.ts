export const DAYS = ['월', '화', '수', '목', '금', '토', '일']

export const getDay = (num: number) => {
  const day = ['월', '화', '수', '목', '금', '토', '일'] as const
  return day[num]
}
