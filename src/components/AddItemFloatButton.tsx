import add from '../assets/icons/add.svg'
import styles from './AddItemFloatButton.module.scss'

export const AddItemFloatButton: React.FC = () => {
  return (
    <button className={styles.buttonAdd}>
      <img src={add} alt="" />
    </button>
  )
}
