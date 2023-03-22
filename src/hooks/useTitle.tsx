import { useEffect } from 'react'

export const useTitle = (title?: string) => {
  useEffect(() => {
    if (title === undefined || title === null)
      document.title = '没有title'
    else
      document.title = title
  })
}
