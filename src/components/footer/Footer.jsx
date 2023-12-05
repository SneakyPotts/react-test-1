import { Logo } from "../index";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Youtube } from "../../images/youtube.svg";
import { ReactComponent as Heard } from "../../images/heard.svg";
import { NavLink } from "react-router-dom";
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__wrapper_up}>
          <Logo />
          <ul className={styles.footer__nav_list}>
            <li className={styles.footer__nav_item}>
              <NavLink
                className={styles.footer__nav_link}
                to='/home'
              >3D-печать</NavLink></li>
            <li className={styles.footer__nav_item}>
              <NavLink
                className={styles.footer__nav_link}
                to='/modeling'
              >3D-моделирование</NavLink>
            </li>
            <li className={styles.footer__nav_item}>
              <NavLink
                className={styles.footer__nav_link}
                to='#'
              >Контакты</NavLink></li>
          </ul>
          <a
            className={styles.footer__phone}
            href="tel:+380979999999"
          >+38 (097) 999-99-99
          </a>
          <div>
            <address>
              <ul>
                <li>
                  <a
                    className={styles.footer__post_link}
                    href="https://goo.gl/maps/yvH8LJa3bzEs8eYTA"
                    target="_blank"
                  >г. Киев, ул. Гагарина 25/68
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer__post_email}
                    href="mailto:pochta@gmail.com"
                  >pochta@gmail.com
                  </a>
                </li>
              </ul>
            </address>
            <ul className={styles.social__list}>
              <li>
                <a className={styles.social__list_link}>
                  <Youtube />
                </a>
              </li>
              <li>
                <a className={styles.social__list_link}>
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__wrapper_down}>
          <p>@2021. Все права защищены</p>
          <div className={styles.footerWrapperHeard}>
            <p>Сделано в Webnauts c</p>
            <Heard
              width='12'
              height='12'
            /></div>


        </div>
      </div>
    </footer>
  )
}

export default Footer;