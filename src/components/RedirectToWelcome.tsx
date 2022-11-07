import { } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectToWelcome: React.FC = () => {
  const nav = useNavigate()
  return (
    <>
    <div>你迷路了</div>
    <div onClick={() => {
      nav('/welcome/1')
    }}>go Page 1</div>
    </>
  )
}
