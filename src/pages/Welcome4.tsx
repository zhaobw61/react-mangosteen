import p4 from '../assets/images/wel4.svg'
import s from './welcome.module.scss'
export const Welcome4: React.FC = () => {
  return (
    <div>
      <img src={p4}></img>
      <h2 className={s.titleWrap}>
        会挣钱<br/>
        还要会省钱
      </h2>
    </div>
  )
}

