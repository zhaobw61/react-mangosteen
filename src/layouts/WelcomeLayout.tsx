import { Link, useLocation, Outlet } from 'react-router-dom';
import s from './WelcomeLayout.module.scss';
import logo from '../assets/images/logo.png';
const linkMap: Record<string, string>  = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/1'
}

export const WelcomeLayout: React.FC = () => {
  const location = useLocation();
  return (
    <div className={s.bodyWrap}>
      <header className={s.headerWrap}>
        <img className={s.logoWrap} src={logo} alt="logo" />
        <h1 className={s.titleWrap}>记账本{location.pathname}</h1>
      </header>
      <div className={s.contentWrap}>
        <Outlet />
      </div>
      <footer className={s.footerWrap}>
        <Link className={s.foontCenter} to={linkMap[location.pathname]}>下一页</Link>
        <Link className={s.foontRight} to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  )
}






