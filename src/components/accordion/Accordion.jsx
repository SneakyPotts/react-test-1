import { useState } from "react";
import cn from 'classnames'
import { Title } from "../index";
import { ReactComponent as Plus } from "../../images/icon_plus.svg";
import { ReactComponent as Minus } from "../../images/icons_minus.svg";
import styles from "./Accordion.module.scss";

function Accordion( { title, text } ) {
  const [isActive, setIsActive] = useState( false );

  const handleClickAccordion = () => {
    setIsActive( ( prevState ) => !prevState );
  };

  const classNameTitleAccordion = cn( isActive ? styles.cost__link__title__active
    : styles.cost__link__title )

  const classNameActiveLine = cn( isActive
    ? styles.accordion__item__active
    : styles.accordion__item );

  const classNameCollapse = cn( isActive
    ? styles.collapseOpen
    : styles.collapse );

  return (
    <>
      <li
        className={classNameActiveLine}
        onClick={() => handleClickAccordion()}
      >
        <div className={styles.accordionTitleWrapper}>
          <Title className={classNameTitleAccordion}>{title}</Title>
          {isActive ? <Minus className={styles.IconMinus} /> : <Plus className={styles.IconPlus} />}
        </div>

        {isActive && (
          <div className={classNameCollapse}>
            <p className={styles.accordion__descr}>{text}</p>
          </div>
        )}
      </li>
    </>
  );
}

export default Accordion;
