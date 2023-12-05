import styles from './HeroSection.module.scss'
import { ReactComponent as Pen } from "../../images/pen.svg";
import { ReactComponent as Books } from "../../images/books.svg";
import { ReactComponent as Printer } from "../../images/printer.svg";
import { ReactComponent as Scroll } from "../../images/scroll.svg";

function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.hero__wrapper}>
            <div className={styles.wrapper_description}>
              <h1 className={styles.hero__title}>
                Услуги
                <br />
                <span className={styles.hero__title_accent}>3D</span>-печати
              </h1>

              <ul className={styles.hero__list}>
                <li
                  className={styles.hero__item}
                >
                  <div className={styles.list__svg_wrapper}>
                    <Pen />
                  </div>
                  <p className={styles.hero__item__description}>
                    Используем готовую модель или поможем с проектированием
                  </p>
                </li>
                <li
                  className={styles.hero__item}
                >
                  <div className={styles.list__svg_wrapper}>
                    <Books />
                  </div>
                  <p className={styles.hero__item__description}>
                    Используем готовую модель или поможем с проектированием
                  </p>
                </li>
                <li
                  className={styles.hero__item}
                >
                  <div className={styles.list__svg_wrapper}>
                    <Printer />
                  </div>
                  <p className={styles.hero__item__description}>
                    Используем готовую модель или поможем с проектированием
                  </p>
                </li>

              </ul>
            </div>
          </div>

          <div className={styles.hero__scroll_wrapper}>
            <Scroll />
            <p className={styles.hero__scroll__descr}>
              Листайте вниз
            </p>
          </div>
        </div>
      </div>

    </>

  )
}

export default HeroSection;