import { useState } from "react";
import cn from 'classnames'
import { Title } from "../../index";
import { ReactComponent as PlusIcon } from "images/icon_plus.svg";
import { ReactComponent as MinusIcon } from "images/icons_minus.svg";
import styles from './OfeersAccordion.module.scss'

function OffersAccordion( { title, text } ) {
  const [isShow, setIsShow] = useState( false )

  return (
    <li
      className={styles.itemList}
      onClick={() => setIsShow( prevState => !prevState )}
    >
      <div
        className={styles.linkAccordion}
      >
        <Title className={styles.title}>
          {title}
        </Title> {isShow ?
        <MinusIcon className={styles.IconMinus}/> :
        <PlusIcon className={styles.IconPlus}/>
      }
      </div>

      {isShow &&
        <div className={cn( isShow ? styles.collapseOpen : styles.collapse )}>
          <p className={styles.text}>{text}</p>
        </div>}
    </li>

  )
}

export default OffersAccordion;
