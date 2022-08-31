import FormContextProvider from '@/components/compounds/Form/context/FormContextProvider'
import React, {
  ComponentPropsWithoutRef,
  ElementType,
  HtmlHTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react'
import { FormProviderProps } from '../../types'

type PolymorphicAsProp<E extends ElementType> = {
  as?: E
} & HtmlHTMLAttributes<E>

// 2. as 로 부터 밭은 element Type을 통해서 Component Props(Attributes) 들을 받아옴
type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>

type FormControlProps<E extends ElementType> = PolymorphicProps<E> & FormProviderProps

// 1. as 에 적힌 html tag element 로 부터 Generic "E" 가 정의됨
const FormControl = <E extends React.ElementType = 'form'>({
  isDisabled,
  isInvalid,
  isRequired,
  children,
  as,
  ...props
}: FormControlProps<E>) => {
  const Component = useMemo(() => as ?? 'form', [])
  return (
    <FormContextProvider isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
      <Component {...props}>{children}</Component>
    </FormContextProvider>
  )
}

export default React.memo(FormControl)
