import { Count } from '../Count/Count'
import s from './OrderGoods.module.css'

export const OrderGoods = ({ title }) => {
  return (
    <>
      <li className={s.item}>
        <img className={s.image} src='img/burger_1.jpg' alt={title} />

        <div className={s.goods}>
          <h3 className={s.title}>{title}</h3>

          <p className={s.weight}>512г</p>

          <p className={s.price}>
            1279
            <span className={s.currency}>₽</span>
          </p>
        </div>

        <Count count={1} />
      </li>
    </>
  )
}
