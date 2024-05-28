import styles from "./Header.module.css"
import logo from "../assets/logo.svg"
function Header() {

  return (
    <div className={styles.banner}>
      <img src={logo} className={styles.logo}/>

      <nav className={styles.nav}>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
        <a href="">Resume</a>
        <a href="">Updates</a>
      </nav>
    </div>
  )
}

export default Header