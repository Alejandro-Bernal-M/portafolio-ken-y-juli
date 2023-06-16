'use client'

import Link from "next/link"
import Image from "next/image"
import Logo from "../assets/K2.png"
import styles from "../styles/Navbar.module.css"
import { usePathname } from "next/navigation"
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from "react"
import Popup from "./Popup"
import  useWindowDimensions  from "../../utils/useWindowDimensions"

function Navbar() {
  const path = usePathname()
  const [isOpen, setOpen] = useState(false)
  let { width } = useWindowDimensions();
  if (width == undefined) {
    width = 0;
  }
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logoHolder}>
          <Image 
            className={styles.logo}
            src= {Logo}
            alt="Logo"
            />
        </div>
        {
          width <= 768 
          &&
          <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          rounded
          />
        }
        {isOpen && <Popup setOpen={setOpen} />}
        <ul className={ width > 768 ? styles.links : 'hidden'}>
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