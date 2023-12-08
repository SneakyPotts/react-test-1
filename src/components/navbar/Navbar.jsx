import { NavLink } from "react-router-dom";
import { ReactComponent as CalcIcon } from "../../images/calc.svg";
import { Button } from "../index";
import styles from './Navbar.module.scss'

const links = [
  { title: "3D-печать", path: '/' },
  { title: "3D-моделирование", path: '/modeling' },
  { title: "Контакты", path: '#' },
]

function Navbar( { onClose } ) {

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map( ( item, index ) => {
            return (
              <li
                key={index}
                className={styles.item}
              >
                <NavLink
                  className={styles.link}
                  to={item.path}
                  // onClick={() => onClose()}
                >{item.title}
                </NavLink>
              </li>)

          } )}
        </ul>
        <Button type='button'>
          <CalcIcon />
          Рассчитать стоимость
        </Button>
      </nav>
    </>
  )
}

export default Navbar;