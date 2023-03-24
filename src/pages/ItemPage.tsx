import React from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { TimeRangerPicker } from '../components/TimeRangerPicker'
import { Topnav } from '../components/Topnav'
import { ItemsPage } from './ItemsPage/ItemsPage'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
import styles from './ItemPage.module.scss'

export const ItemPage: React.FC = () => {
  return (
    <div>
      <div className={styles.navWrap}>
        <Topnav />
        <TimeRangerPicker />
      </div>
      <ItemsSummary />
      <ItemsPage />
      <AddItemFloatButton />
    </div>
  )
}
