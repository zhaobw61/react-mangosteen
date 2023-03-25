import React, { useState } from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import type { TimeRange } from '../components/TimeRangerPicker'
import { TimeRangerPicker } from '../components/TimeRangerPicker'
import { Topnav } from '../components/Topnav'
import { ItemsPage } from './ItemsPage/ItemsPage'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
import styles from './ItemPage.module.scss'

export const ItemPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  return (
    <div>
      <div className={styles.navWrap}>
        <Topnav />
        <TimeRangerPicker selected={timeRange} onSelected={setTimeRange} />
      </div>
      <ItemsPage />
      <ItemsSummary />
      <AddItemFloatButton />
    </div>
  )
}
