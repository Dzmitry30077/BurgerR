import s from './Order.module.css'
import { OrderGoods } from '../OrderGoods/OrderGoods'

const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог']

export const Order = () => {
  return (
    <>
      <div className='order'>
        <section className={s.wrapper}>
          <div className={s.header} tabIndex='0' role='button'>
            <h2 className={s.title}>Корзина</h2>

            <span className={s.count}>4</span>
          </div>

          <div className={s.wrap_list}>
            <ul className={s.list}>
              {orderList.map(elem => (
                <OrderGoods title={elem} />
              ))}
            </ul>

            <div className={s.total}>
              <p>Итого</p>
              <p>
                <span className={s.amount}>1279</span>
                <span className='currency'>₽</span>
              </p>
            </div>

            <button className={s.submit}>Оформить заказ</button>

            <div className={s.apeal}>
              <p className={s.text}>Бесплатная доставка</p>
              <button className={s.close}>Свернуть</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
