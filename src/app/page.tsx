import Image from 'next/image'
import styles from './page.module.css'
import pareja from '../assets/pareja.png'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>KENYTH Y JULIANA</h1>
     <div className={styles.photoAndInfo}>
      <div>
        <Image src={pareja} alt="Pareja" className={styles.photo} />
      </div>
      <div className={styles.info}>
        <h2>¡Estamos muy felices de compartir nuestro talento!</h2>
        <br />
        <h3>Nuestros servicios:</h3>
        <ul>
          <li>Ambientación de eventos sociales.</li>
          <li>Bailes típicos Colombianos.</li>
          <li>Coreografías para eventos sociales.</li>
          <li>Clases de baile.</li>
        </ul>
      </div>
     </div>
    </main>
  )
}
