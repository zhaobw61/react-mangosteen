import loadingSVG from '../assets/icons/loading.svg'
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loadingSvgWrap}>
      <img src={loadingSVG} alt="" />
    </div>
  )
}
