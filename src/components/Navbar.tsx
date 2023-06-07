import Link from "next/link"

function Navbar() {
    return (
      <nav>
        <span>
          Logo
        </span>
        <ul>
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