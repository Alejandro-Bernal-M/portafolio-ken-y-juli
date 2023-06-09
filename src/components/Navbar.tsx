'use client'

import Link from "next/link"
import Image from "next/image"
import Logo from "../assets/K2.png"
import styles from "../styles/Navbar.module.css"
import { usePathname } from "next/navigation"


function Navbar() {
  const path = usePathname()

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
          <li
            className={path == "/" ? styles.active : ""}
          >
            <Link
              href="/"
            > 
              Inicio 
            </Link>
          </li>
          <li
            className={path == "/sobre-nosotros" ? styles.active : ""}
          >
            <Link
              href="/sobre-nosotros"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li
            className={path == "/contacto" ? styles.active : ""}
          >
            <Link
              href="/contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar