import styles from '../styles/Popup.module.css'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

type PopupProps = {
  setOpen: (open: boolean) => void
}

function Popup({ setOpen }: PopupProps) {
  const path = usePathname()
  return (
    <div className={styles.container}>
      <ul className={styles.popLink}>
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              > 
              Inicio 
              {path == "/" && <FaArrowLeft />}
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              onClick={() => setOpen(false)}
              >
              Sobre Nosotros
              {path == "/sobre-nosotros" && <FaArrowLeft />}
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              >
              Contacto
              {path == "/contacto" && <FaArrowLeft />}
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Popup