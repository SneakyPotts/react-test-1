import { useState } from "react";
import styles from './Accordion.module.scss'
import { ReactComponent as Plus } from "../../images/icon_plus.svg";
import { ReactComponent as Minus } from "../../images/icons_minus.svg";
import { Title } from "../index";

function Accordion( { title, text } ) {
  const [isActive, setIsActive] = useState( false )

  const handleClickAccordion = () => {
    setIsActive( prevState => !prevState )

  }

  const classNameTitleAccordion = isActive ? `${styles.cost__link__title__active}`
    : `${styles.cost__link__title}`

  const classNameActiveLine = isActive ? `${styles.accordion__item__active}`
    : `${styles.accordion__item}`

  return (
    <>
      <li
        className={classNameActiveLine}
        onClick={() => handleClickAccordion()}
      >
        <div className={styles.accordion__title__wrapper}>
          <Title className={classNameTitleAccordion}>{title}</Title>
          {isActive ? <Minus /> : <Plus />}
        </div>

        {isActive &&
          <p className={styles.accordion__descr}>
            {text}
          </p>}
      </li>

    </>
  )
}

export default Accordion;