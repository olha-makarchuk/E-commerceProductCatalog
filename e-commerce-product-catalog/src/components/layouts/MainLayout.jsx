import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./MainLayout.module.css";
import Breadcrumbs from "../common/Breadcrumbs";

function MainLayout() {
  return (
        <div className={styles.page}>
      <Header />
      <Breadcrumbs/>
      <main className={styles.content}>
      <Outlet/> 

      </main>

      <Footer />
    </div>
  )
}

export default MainLayout