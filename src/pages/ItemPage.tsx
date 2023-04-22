import React, { useState } from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import type { TimeRange } from '../components/TimeRangerPicker'
import { TimeRangerPicker } from '../components/TimeRangerPicker'
import { TopNav } from '../components/TopNav'
import { TopMenu } from '../components/TopMenu'
// import { MenuContext } from '../contexts/menuContext'
import { useMenuStore } from '../stores/useMenuStore'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
import styles from './ItemPage.module.scss'

// interface MenuContextT {
//   setVisible?: (visible: boolean) => {}
//   visible?: boolean
// }

export const ItemPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  // const [visible, setVisible] = useState(false)
  const { visible, setVisible } = useMenuStore()
  return (
    <div>
      {/* <MenuContext.Provider value={{
        visible,
        setVisible
      }}> */}
        <div className={styles.navWrap}>
          <TopNav />
          <TimeRangerPicker selected={timeRange} onSelected={setTimeRange} />
        </div>
        <ItemsSummary />
        <ItemsList />
        <AddItemFloatButton />
        { visible
          ? <TopMenu onClickMask={() => {
            setVisible(false)
          }}/>
          : null}
      {/* </MenuContext.Provider> */}
    </div>
  )
}
