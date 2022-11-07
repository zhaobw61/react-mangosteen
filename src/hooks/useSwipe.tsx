import { useEffect, useRef, useState } from 'react'

export const useSwipe = (elementRef: RefObject<HTMLElement>) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const x = useRef(-1)
  const onTouchStart = (e: TouchEvent) => {
    e.preventDefault()
    x.current = e.touches[0].clientX
  }
  const onTouchMove = (e: TouchEvent) => {
    const newX = e.touches[0].clientX
    const d = newX - x.current
    if (Math.abs(d) < 3)
      setDirection('')
    else if (d > 0)
      setDirection('right')
    else if (d < 0)
      setDirection('left')
  }
  const onTouchEnd = (e: TouchEvent) => {
    setDirection('')
  }
  useEffect(() => {
    if (!elementRef.current)
      return
    elementRef.current.addEventListener('touchstart', onTouchStart)
    elementRef.current.addEventListener('touchmove', onTouchMove)
    elementRef.current.addEventListener('touchend', onTouchEnd)
    return () => {
      if (!elementRef.current)
        return
      elementRef.current.removeEventListener('touchstart', onTouchStart)
      elementRef.current.removeEventListener('touchmove', onTouchMove)
      elementRef.current.removeEventListener('touchend', onTouchEnd)
    }
  }, [])
  return {
    direction
  }
}

