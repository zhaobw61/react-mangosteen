import { useLocalStore } from '../stores/useLocalStore'

export const Home: React.FC = () => {
  useLocalStore()
  return (
    <div>
      Home
    </div>
  )
}
