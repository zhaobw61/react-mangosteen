import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useSwipe } from '../hooks/useSwipe'
import { useLocalStore } from '../stores/useLocalStore'
import s from './WelcomeLayout.module.scss'
const linkMap: Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/1'
}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const nav = useNavigate()
  const main = useRef<HTMLElement>(null)
  const { direction } = useSwipe(main)
  useEffect(() => {
    if (direction === 'left') {
      setTimeout(() => {
        nav(linkMap[location.pathname])
      }, 1000)
    }
  }, [direction, location.pathname, linkMap])
  const { setHasReadWelcomes } = useLocalStore()
  const onSkip = () => {
    setHasReadWelcomes('yes')
  }
  return (
    <div className={s.bodyWrap}>
      <header className={s.headerWrap}>
        <img className={s.logoWrap} src={logo} alt="logo" />
        <h1 className={s.titleWrap}>记账本</h1>
      </header>
      <div ref={main} className={s.contentWrap}>
        <Outlet />
      </div>
      <footer className={s.footerWrap}>
        <Link className={s.foontCenter} to={linkMap[location.pathname]}>下一页</Link>
        <Link className={s.foontRight} to="/home" onClick={onSkip} >跳过</Link>
      </footer>
    </div>
  )
}

