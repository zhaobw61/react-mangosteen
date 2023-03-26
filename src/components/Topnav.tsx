import React from 'react'
import listSVG from '../assets/icons/list.svg'
import { useMenuStore } from '../stores/useMenuStore'
// import { MenuContext } from '../contexts/menuContext'

import styles from './TopNav.module.scss'

export const TopNav: React.FC = () => {
  const { visible, setVisible } = useMenuStore()
  return (
    <div className={styles.topNavWrap}>
      <img src={listSVG} alt="" onClick={() => {
        setVisible && setVisible(!visible)
      }} />
      <h1>TRON </h1>
    </div>
  )
}
