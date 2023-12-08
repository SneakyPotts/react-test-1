import { useState } from "react";
import { Title } from "../index";
import styles from "./Accordion.module.scss";

// import { ReactComponent as Plus } from "/images/icon_plus.svg";

// import { ReactComponent as Minus } from "/images/icons_minus.svg";

function Accordion( { title, text } ) {
  const [isActive, setIsActive] = useState( false );

  const handleClickAccordion = () => {
    setIsActive( ( prevState ) => !prevState );
  };

  const classNameTitleAccordion = isActive
    ? `${styles.cost__link__title__active}`
    : `${styles.cost__link__title}`;

  const classNameActiveLine = isActive
    ? `${styles.accordion__item__active}`
    : `${styles.accordion__item}`;

  const classNameCollapse = isActive
    ? `${styles.collapseOpen}`
    : `${styles.collapse}`;

  return (
    <>
      <li
        className={classNameActiveLine}
        onClick={() => handleClickAccordion()}
      >
        <div className={styles.accordionTitleWrapper}>
          <Title className={classNameTitleAccordion}>{title}</Title>
          {/*{isActive ? <Minus /> : <Plus />}*/}
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
