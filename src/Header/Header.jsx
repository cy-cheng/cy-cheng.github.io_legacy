import styles from "./Header.module.css"
import logo from "../assets/logo.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header() {

  return (
    <div className={styles.banner}>

      <img src={logo} className={styles.logo} />

      <nav className={styles.links}>
        <a href="mailto=cycheng.dev@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </nav>

      <nav className={styles.menu}>
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