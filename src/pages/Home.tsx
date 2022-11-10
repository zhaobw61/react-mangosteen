import p from '../assets/images/pig.svg'
import add from '../assets/icons/add.svg'
import styles from './Home.module.scss'

export const Home: React.FC = () => {
  return (
    <div>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src={p} alt="" />
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.button}>开始记账</button>
      </div>
      <button className={styles.buttonAdd}>
        <img src={add} alt="" />
      </button>
    </div>
  )
}
