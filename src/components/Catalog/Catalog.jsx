import { CatalogProduct } from '../CatalogProduct/CatalogProduct'
import { Container } from '../Container/Container'
import { Order } from '../Order/Order'
import s from './catalog.module.css'

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
]

export const Catalog = () => {
  return (
    <>
      <section className={s.catalog}>
        <Container>
          <div className={s.container}>
            <Order />
            <div className={s.wrapper}>
              <h2 className={s.title}>Бургеры</h2>

              <div className={s.wrap_list}>
                <ul className={s.list}>
                  {goodsList.map(elem => (
                    <li className={s.item}>
                      <CatalogProduct title={elem.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
