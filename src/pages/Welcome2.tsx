import p2 from '../assets/images/wel2.svg'
import s from './welcome.module.scss'
export const Welcome2: React.FC = () => {
  return (
    <div>
      <img src={p2}></img>
      <h2 className={s.titleWrap}>
        会挣钱<br/>
        还要会省钱
      </h2>
    </div>
  )
}

