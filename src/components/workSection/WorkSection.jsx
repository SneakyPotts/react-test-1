import styles from './WorkSection.module.scss'
import { Title } from "../index";

const data = [
  { id: "1", description: 'Составление заявки на просчёт стоимости и сроков' },
  { id: "2", description: 'Предоплата работы' },
  { id: "3", description: 'Создание и согласование 3D-модели' },
  { id: "4", description: 'Предоплата работы' },
  { id: "5", description: 'Отправка клиенту после оплаты остатка' },
]

function WorkSection() {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <Title className={styles.work__title}>Как мы работаем</Title>
        <ol className={styles.work__list}>
          {data.map( ( { id, description } ) => (
            <li
              key={id}
              className={styles.work__item}
            >
              <p className={styles.work__text}>
                {description}
              </p>
            </li>)
          )}
        </ol>
      </div>
    </div>
  )
}

export default WorkSection;