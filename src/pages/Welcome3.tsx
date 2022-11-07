import p3 from '../assets/images/wel3.svg'
import s from './welcome.module.scss'
export const Welcome3: React.FC = () => {
  return (
    <div>
      <img src={p3}></img>
      <h2 className={s.titleWrap}>
        会挣钱<br/>
        还要会省钱
      </h2>
    </div>
  )
}

