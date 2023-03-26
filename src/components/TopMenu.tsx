import styles from './TopMenu.module.scss'
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'

interface Props {
  onClickMask: () => void
}

export const TopMenu: React.FC<Props> = (props) => {
  const { onClickMask } = props
  return (
    <>
      <div className={styles.mask} onClick={onClickMask}></div>
      <div className={styles.topMenuWrap}>
        <CurrentUser />
        <Menu />
      </div>
    </>
  )
}
