import styles from './TopMenu.module.scss'
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'

export const TopMenu: React.FC = () => {
  return (<div className={styles.topMenuWrap}>
    <CurrentUser />
    <Menu />
  </div>)
}
