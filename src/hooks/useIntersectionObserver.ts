import { RefObject, useEffect, useRef, useState } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

function useIntersectionObserver(elementRef: RefObject<Element>, options: Args) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && options.freezeOnceVisible

  const updateEntry = ([newEntry]: IntersectionObserverEntry[]): void => {
    setEntry(newEntry)
  }

  const observer = useRef<IntersectionObserver>(new IntersectionObserver(updateEntry, options))

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    observer.current?.observe(node)

    return () => observer.current?.disconnect()
  }, [elementRef?.current, observer])

  return [entry, observer.current] as const
}

export default useIntersectionObserver
