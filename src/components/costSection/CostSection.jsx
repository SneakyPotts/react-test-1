import { Accordion, Title } from '../index'
import { useState } from "react";

import styles from './CostSection.module.scss'

const data = [
  {
    id: '1',
    title: 'ABS PRO (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '2', title: 'PLA (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '3', title: 'ELASTAN (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '4', title: 'COPET (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '5', title: 'NYLON CARBON (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '6', title: 'TANGO (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '7', title: 'VERO WHITE (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '8', title: 'VERO CLEAR (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
]
const data2 = [
  {
    id: '1',
    title: '2ABS PRO (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '2', title: '2PLA (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '3', title: '2ELASTAN (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '4', title: '2COPET (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '5', title: '2NYLON CARBON (FDM)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '6', title: '2TANGO (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '7', title: '2VERO WHITE (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
  {
    id: '8', title: '2VERO CLEAR (POLYJET)',
    description: 'ABS-пластик - ударопрочная техническая термопластическая смола на основ' +
      ' сополимера крилонитрила с бутадиеном и стиролом.',
  },
]

function CostSection() {
  const [isPrinter, setIsPrinter] = useState( false )

  return (
    <div className={styles.cost}>
      <div className={styles.container}>
        <Title className={styles.cost__title}>Рассчитать стоимость
          <span className={styles.cost__title__accent}> 3D</span>-печати
        </Title>
        <div className={styles.cost__card}>
          <div className={styles.cost__links}>
            <button
              onClick={() => setIsPrinter( false )}
              className={styles.cost__link__item}
              type="button"
            >Материалы
            </button>
            <button
              onClick={() => setIsPrinter( true )}
              className={styles.cost__link__item}
              type="button"
            >Принтеры
            </button>
          </div>
          <ul>
            {isPrinter ? (data2.map( ( { id, title, description } ) => {
              return (
                <Accordion
                  key={id}
                  title={title}
                  text={description}
                />
              )
            } )) : (data.map( ( { id, title, description } ) => (
                <Accordion
                  key={id}
                  title={title}
                  text={description}
                />
              )
            ))}

          </ul>
        </div>

      </div>

    </div>
  )
}

export default CostSection;