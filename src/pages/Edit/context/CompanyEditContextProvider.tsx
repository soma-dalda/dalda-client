import React, { createContext, PropsWithChildren, useCallback, useMemo } from 'react'
import { Updater, useImmer } from 'use-immer'

import { User } from '@/type'
import { getDay, validateBlank } from '../utils'

type ComapnyKeys =
  | 'id'
  | 'businessHours'
  | 'companyDomain'
  | 'companyIntroduction'
  | 'companyName'
  | 'companyLocation'
  | 'instagramLink'
  | 'etcLinks'
  | 'qnaLink'

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
  handleChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOpenChange: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEndChange: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void
  addEtcLinks: () => void
  deleteEtcLink: (index: number) => () => void
  setCompany: Updater<Company>
}

const initialValue: CompanyEditContextValue = {
  businessHours: {
    월: { open: '0', end: '0' },
    화: { open: '0', end: '0' },
    수: { open: '0', end: '0' },
    목: { open: '0', end: '0' },
    금: { open: '0', end: '0' },
    토: { open: '0', end: '0' },
    일: { open: '0', end: '0' },
  },
  companyDomain: '',
  companyIntroduction: '',
  companyLocation: '',
  companyName: '',
  etcLinks: [],
  id: '',
  instagramLink: '',
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
  handleChangeLink: () => {},
  handleChangeTitle: () => {},
  handleEndChange: () => () => {},
  handleOpenChange: () => () => {},
  addEtcLinks: () => {},
  deleteEtcLink: () => () => {},
  setCompany: () => {},
})

const CompanyEditContextProvider = ({ children }: PropsWithChildren) => {
  const [company, setCompany] = useImmer<CompanyEditContextValue>({ ...initialValue })

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
      draft.instagramLink = e.target.value
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

  const handleChangeLink = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      if (draft.etcLinks) {
        draft.etcLinks[draft.etcLinks.length - 1].link = e.target.value
      }
    })
  }, [])

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((draft) => {
      if (draft.etcLinks) {
        draft.etcLinks[draft.etcLinks.length - 1].title = e.target.value
      }
    })
  }, [])

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
            draft.businessHours[getDay(index)].open = `${+e.target.value}`
          }
        }
      })
    },
    []
  )

  const handleEndChange = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!validateBlank(e.target.value)) {
        return
      }
      setCompany((draft) => {
        if (+e.target.value <= 24 && +e.target.value >= 0) {
          if (draft.businessHours) {
            draft.businessHours[getDay(index)].end = `${+e.target.value}`
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
      setCompany,
    }),
    [
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
      setCompany,
    ]
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
