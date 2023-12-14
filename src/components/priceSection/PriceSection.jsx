import {useState} from "react";
import TableMobile from "./tableMobile/tableMobile";
import {Title} from "../index";
import TableDesktop from "./tableDesktop/TableDesktop";
import {useWindowSize} from "../../hooks/useWindowSize";
import styles from './PriceSection.module.scss'

const dataTable = [
  {
    id: '1',
    header: 'Материал/Высота слоя',
    material: 'Стандартные (ABS, PLA)',
    standard: '4',
    optimal: '5,6',
    high: '8,9'
  }, {
    id: '2',
    header: 'Стандартное качество 300 микрон',
    material: 'Высокопрочные и ударостойкие ',
    standard: '4,2',
    optimal: '5,8',
    high: '8,9'
  }, {
    id: '3',
    header: 'Оптимальное качество 200 микрон',
    material: 'Гибкие и резиноподобные',
    standard: '5,5',
    optimal: '7,1',
    high: '10,4'
  }, {
    id: '4',
    header: 'Высокое качество 100 микрон',
    material: 'Декоративные и специальные',
    standard: '4,5',
    optimal: '6,1',
    high: '9,4'
  },
]
const dataTable2 = [
  {
    id: '1',
    header: 'Материал/Высота слоя',
    material: 'Стандартные (ABS, PLA)',
    standard: '4,2',
    optimal: '5,9',
    high: '9,9'
  }, {
    id: '2',
    header: 'Стандартное качество 300 микрон',
    material: 'Высокопрочные и ударостойкие ',
    standard: '4,8',
    optimal: '6,8',
    high: '9,9'
  }, {
    id: '3',
    header: 'Оптимальное качество 200 микрон',
    material: 'Гибкие и резиноподобные',
    standard: '5,9',
    optimal: '7,7',
    high: '11,4'
  }, {
    id: '4',
    header: 'Высокое качество 100 микрон',
    material: 'Декоративные и специальные',
    standard: '6,2',
    optimal: '8,3',
    high: '10,6'
  },
]

function PriceSection() {
  const [isFDM, setIsFDM] = useState(false)
  const data = isFDM ? dataTable : dataTable2

  const {width} = useWindowSize()

  return (
    <div className={styles.price}>
      <div className={styles.container}>
        <Title className={styles.priceTitle}> Цены </Title>
        <div className={styles.priceCard}>
          <div className={styles.priceLinks}>
            <button
              onClick={() => setIsFDM(false)}
              className={styles.priceLinkItem}
              type="button"
            >FDM
            </button>
            <button
              onClick={() => setIsFDM(true)}
              className={styles.priceLinkItem}
              type="button"
            >SLA
            </button>
          </div>
          <p className={styles.description}>
            Метод послойного наплавления, применяется для широкого спектра материалов.
          </p>
          {width >= 376 ? <TableDesktop dataTable={dataTable}/> :
            <TableMobile
              dataTable={data}/>} {/*<TableMobile dataTable={data} />*/} {/*<TableDesktop dataTable={dataTable} />*/}
        </div>
      </div>
    </div>
  )
}

export default PriceSection;