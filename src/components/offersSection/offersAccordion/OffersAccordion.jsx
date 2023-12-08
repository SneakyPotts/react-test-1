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
      onClick={() => setIsShow( !isShow )}
    >
      <MinusIcon style={{ stroke: 'blue' }} />
      <PlusIcon />
      <div>
        <Title
          // className={`${isShow ? `${styles.title_active}` : `${styles.title}`}`}
          className={styles.title}
        >
          {title}
        </Title>
      </div>

      {isShow &&
        <div className={cn( isShow ? styles.collapseOpen : styles.collapse )}>
          <p className={styles.text}>{text}</p>
        </div>}
    </li>

  )
}

export default OffersAccordion;
