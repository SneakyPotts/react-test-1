import { MakeCard, Title } from "../index";
import styles from './MakeSection.module.scss'

const data = [
  {
    img: "/assets/makeSection/make1.png",
    title: "Промышленные прототипы",
    descr: "Для испытания образцов перед началом производства"
  },
  {
    img: "/assets/makeSection/make2.png",
    title: "Архитектурные макеты",
    descr: "Для наглядной презентации ваших проектов"
  },
  {
    img: "/assets/makeSection/make3.png",
    title: "Ювелирные изделия",
    descr: "Для придания индивидуального стиля"
  },
  {
    img: "/assets/makeSection/make4.png",
    title: "Скульптуры",
    descr: "Для творческой декорации интерьера"
  },
  {
    img: "/assets/makeSection/make5.png",
    title: "Инженерные детали",
    descr: "Для воплощения в жизнь смелых идей"
  },
  {
    img: "/assets/makeSection/make6.png",
    title: "Презентационные макеты",
    descr: "Для демонстрации на выставках или на витринах"
  },
  {
    img: "/assets/makeSection/make7.png",
    title: "Медицинские и образовательные модели",
    descr: "Для использования в качестве учебных пособий"
  },
  {
    img: "/assets/makeSection/make8.png",
    title: "Автозапчасти",
    descr: "Для замены редких или снятых с производства деталей"
  },
  {
    img: "/assets/makeSection/make9.png",
    title: "Сувенирная продукция",
    descr: "Для создания необычных и запоминающихся даров"
  },
]

function MakeSection() {
  return (
    <div className={styles.make}>
      <div className={styles.container}>
        <Title className={styles.make__title}>Изготовим что угодно</Title>
        <ul className={styles.make__list}>
          {data.map( ( item, index ) => {
            const { img, title, descr } = item
            return <MakeCard
              key={index}
              img={img}
              title={title}
              text={descr}
            />
          } )}
        </ul>
      </div>
    </div>
  )
}

export default MakeSection;