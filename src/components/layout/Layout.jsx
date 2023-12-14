import { Outlet } from "react-router-dom";
import { Footer, Header } from '../index.js'

import styles from './Layout.module.scss'

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;