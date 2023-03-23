import useSWR from 'swr'
import { Navigate } from 'react-router-dom'
import p from '../assets/images/pig.svg'
import { ajax } from '../lib/ajax'
import { useTitle } from '../hooks/useTitle'
import Loading from '../components/Loading'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import styles from './Home.module.scss'
interface Props {
  title?: string
}
export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { data: meData, error: meError } = useSWR('/api/v1/me', async (path) => {
    const response = await ajax.get<Resource<User>>(path)
    return response.data.resource
  })
  const { data: itemsData, error: itemsError } = useSWR('/api/v1/items', async (path) => {
    const response = await ajax.get<Resources<Item>>(path)
    return response.data
  })
  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  // if (isLoadingMe || isLoadingItems)
  return <Loading />

  // if (itemsData?.resources[0])
  //   return <Navigate to="/items" />

  return (
    <div>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src={p} alt="" />
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.button}>开始记账</button>
      </div>
      <AddItemFloatButton />
    </div>
  )
}
