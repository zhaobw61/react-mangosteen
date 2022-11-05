import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/1'
}
export const WelcomeLayout: React.FC = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <h1>记账本</h1>
      </header>
      <Outlet />
      <footer>
        <Link to={linkMap[location.pathname]}>下一页</Link>
        <Link to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  )
}






