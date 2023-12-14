import { useEffect, useState } from "react";

import { Navbar, Logo, Modal } from "../index.js";
import { ReactComponent as MobileIcon } from "../../images/burger.svg";

import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__wrapper}>
          <div>
            <Logo />
          </div>
          <div>
            <MobileIcon
              className={styles.header__burger_icon}
              onClick={() => handleShowMobileMenu()}
              widh="44"
              height="44"
            />
          </div>
          <div className={styles.header__desktop_menu}>
            <Navbar />
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <>
          <Modal onClose={handleShowMobileMenu}>
            <Navbar onClose={handleShowMobileMenu} />
          </Modal>
        </>
      )}
    </header>
  );
}

export default Header;
