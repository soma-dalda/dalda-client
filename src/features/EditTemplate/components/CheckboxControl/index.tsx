import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren, useMemo } from 'react'
import CheckboxControlProvider from '../../context/CheckboxControlProvider'
import { CheckboxProviderProps } from '../../types'

type PolymorphicAsProp<E extends ElementType> = {
  as?: E
}

// 2. as 로 부터 밭은 element Type을 통해서 Component Props(Attributes) 들을 받아옴
type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>

type CheckboxControlProps<E extends ElementType> = PolymorphicProps<E> & CheckboxProviderProps

const CheckboxControl = <E extends React.ElementType>({
  as,
  children,
  checkboxs,
  setCheckboxs,
  ...props
}: CheckboxControlProps<E>) => {
  const Component = useMemo(() => as ?? 'div', [])

  return (
    <CheckboxControlProvider checkboxs={checkboxs} setCheckboxs={setCheckboxs}>
      <Component {...props}>{children}</Component>
    </CheckboxControlProvider>
  )
}

export default CheckboxControl
