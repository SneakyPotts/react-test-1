import { Outlet } from "react-router-dom";
import { Footer, Header } from '../index.js'

// import styles from './Layout.module.scss'

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;