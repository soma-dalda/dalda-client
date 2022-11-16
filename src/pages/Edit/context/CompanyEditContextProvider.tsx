import React, { createContext, PropsWithChildren, useCallback, useMemo } from 'react'
import { Updater, useImmer } from 'use-immer'

import { User } from '@/type'
import { validateBlank } from '../utils'

type ComapnyKeys =
  | 'id'
  | 'businessHours'
  | 'companyDomain'
  | 'companyIntroduction'
  | 'companyName'
  | 'companyLocation'
  | 'instaLink'
  | 'etcLinks'
  | 'qnaLink'
  | 'profileImage'
  | 'userPhone'

type CompanyPick = Pick<User, ComapnyKeys>

type Company = {
  [key in keyof CompanyPick]: CompanyPick[key]
}

type CompanyEditContextValue = Company & { error?: ComapnyKeys | null }
type CompanyEditContextAction = {
  handleChangeDomain: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeInstagram: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeLocation: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeIntroduction: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeQnaLink: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeLink: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTitle: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOpenChange: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEndChange: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  addEtcLinks: () => void
  deleteEtcLink: (index: number) => () => void
  hanldeComapny: Updater<Company>
  setCompany: Updater<Company>
}

export const initialValue: CompanyEditContextValue = {
  businessHours: [
    { day: '월', start: '0', end: '0' },
    { day: '화', start: '0', end: '0' },
    { day: '수', start: '0', end: '0' },
    { day: '목', start: '0', end: '0' },
    { day: '금', start: '0', end: '0' },
    { day: '토', start: '0', end: '0' },
    { day: '일', start: '0', end: '0' },
  ],
  companyDomain: '',
  companyIntroduction: '',
  companyLocation: '',
  companyName: '',
  profileImage: '',
  userPhone: '',
  etcLinks: [],
  id: '',
  instaLink: '',
  qnaLink: '',
}

export const CompanyEditValueContext = createContext<CompanyEditContextValue>({ ...initialValue })
export const CompanyEditActionContext = createContext<CompanyEditContextAction>({
  handleChangeDomain: () => {},
  handleChangeInstagram: () => {},
  handleChangeIntroduction: () => {},
  handleChangeLocation: () => {},
  handleChangeName: () => {},
  handleChangeQnaLink: () => {},
  handleChangeLink: () => () => {},
  handleChangeTitle: () => () => {},
  handleEndChange: () => () => {},
  handleOpenChange: () => () => {},
  addEtcLinks: () => {},
  deleteEtcLink: () => () => {},
  setCompany: () => {},
  hanldeComapny: () => {},
})

const CompanyEditContextProvider = ({ children }: PropsWithChildren) => {
  const [company, setCompany] = useImmer<CompanyEditContextValue>({ ...initialValue })

  const hanldeComapny: Updater<CompanyEditContextValue> = useCallback((args) => {
    if (typeof args !== 'function') {
      Object.entries(args).forEach((arg) => {
        const [key, value] = arg
        if (value !== null) {
          setCompany((prev) => ({ ...prev, [key]: value }))
        }
      })
    }
  }, [])

  const handleChangeDomain = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      draft.companyDomain = e.target.value
    })
  }, [])

  const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      draft.companyName = e.target.value
    })
  }, [])

  const handleChangeInstagram = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      draft.instaLink = e.target.value
    })
  }, [])

  const handleChangeLocation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      draft.companyLocation = e.target.value
    })
  }, [])

  const handleChangeIntroduction = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCompany((draft) => {
      draft.companyIntroduction = e.target.value
    })
  }, [])

  const handleChangeQnaLink = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      draft.qnaLink = e.target.value
    })
  }, [])

  const handleChangeLink = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany((draft) => {
        if (draft.etcLinks) {
          draft.etcLinks[index].link = e.target.value
        }
      })
    },
    []
  )

  const handleChangeTitle = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany((draft) => {
        if (draft.etcLinks) {
          draft.etcLinks[index].title = e.target.value
        }
      })
    },
    []
  )

  const addEtcLinks = useCallback(() => {
    setCompany((draft) => {
      if (draft.etcLinks) {
        draft.etcLinks.push({ title: '', link: '' })
      }
    })
  }, [])

  const deleteEtcLink = useCallback(
    (index: number) => () => {
      setCompany((draft) => {
        if (draft.etcLinks) {
          draft.etcLinks = draft.etcLinks.filter((_, i) => i !== index)
        }
      })
    },
    []
  )

  const handleOpenChange = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCompany((draft) => {
        if (+e.target.value <= 24 && +e.target.value >= 0) {
          if (draft.businessHours) {
            draft.businessHours[index].start = `${+e.target.value}`
          }
        }
      })
    },
    [company]
  )

  const handleEndChange = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!validateBlank(e.target.value)) {
        return
      }
      setCompany((draft) => {
        if (+e.target.value <= 24 && +e.target.value >= 0) {
          if (draft.businessHours) {
            draft.businessHours[index].end = `${+e.target.value}`
          }
        }
      })
    },
    []
  )

  const value = useMemo(() => company, [company])
  const action = useMemo(
    () => ({
      handleChangeDomain,
      handleChangeName,
      handleChangeInstagram,
      handleChangeLocation,
      handleChangeIntroduction,
      handleChangeQnaLink,
      handleChangeLink,
      handleChangeTitle,
      handleOpenChange,
      handleEndChange,
      addEtcLinks,
      deleteEtcLink,
      hanldeComapny,
      setCompany,
    }),
    []
  )

  return (
    <CompanyEditValueContext.Provider value={value}>
      <CompanyEditActionContext.Provider value={action}>
        {children}
      </CompanyEditActionContext.Provider>
    </CompanyEditValueContext.Provider>
  )
}

export default CompanyEditContextProvider
