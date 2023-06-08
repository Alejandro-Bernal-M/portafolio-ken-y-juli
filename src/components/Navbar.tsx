import Link from "next/link"
import Image from "next/image"
import Logo from "../assets/K2.png"
import styles from "../styles/Navbar.module.css"


function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logoHolder}>
          <Image 
            className={styles.logo}
            src= {Logo}
            alt="Logo"
          />
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/"> Inicio </Link>
          </li>
          <li>
            <Link href="/sobre-nosotros"> Sobre Nosotros </Link>
          </li>
          <li>
            <Link href="/contacto"> Contacto </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar