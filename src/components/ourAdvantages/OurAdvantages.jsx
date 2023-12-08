import styles from './OurAdvantages.module.scss'
import { AdvantagesCard, Title } from "../index";
import { ReactComponent as AdvantIcon1 } from "../../images/advantages/advantages1.svg";
import { ReactComponent as AdvantIcon2 } from "../../images/advantages/advantages2.svg";
import { ReactComponent as AdvantIcon3 } from "../../images/advantages/advantages3.svg";
import { ReactComponent as AdvantIcon4 } from "../../images/advantages/advantages4.svg";
import { ReactComponent as AdvantIcon5 } from "../../images/advantages/advantages5.svg";

const data = [
  {
    id: '1',
    // img: '../../images/advantages/advantages1.svg',
    img: <AdvantIcon1 />,
    title: 'Полный спектр услуг',
    text: '3D-моделирование, печать изделий, постобработка'
  },
  {
    id: '2',
    img: <AdvantIcon2 />,
    title: 'Высокая точность',
    text: 'От 20 до 300 микрон'
  },
  {
    id: '3',
    img: <AdvantIcon3 />,
    title: 'Скорость выполнения',
    text: 'На производство изделий уходит от 1 до 3 дней'
  },
  {
    id: '4',
    img: <AdvantIcon4 />,
    title: 'Доставкапо всей Украине',
    text: 'Осуществляем доставку Новой Почтой'
  },
  {
    id: '5',
    img: <AdvantIcon5 />,
    title: 'Производство тиражами',
    text: 'Печатаем в количестве от 1 до 1000 штук'
  },
]

function OurAdvantages() {
  return (
    <div className={styles.container}>
      <Title className={styles.ourAdvantagesTitle}>Наши преимущества</Title>
      {data.map( ( { id, img, title, text } ) => (
        <ul key={id}>
          <AdvantagesCard
            text={text}
            title={title}
            icon={img}
          />
        </ul>
      ) )}
    </div>
  )
}

export default OurAdvantages;