import Image from 'next/image'
import styles from './page.module.css'
import pareja from '../assets/pareja.png'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Kenyth y Juliana</h1>
     <div className={styles.photoAndInfo}>
      <div>
        <Image src={pareja} alt="Pareja" className={styles.photo} />
      </div>
      <div className={styles.info}>
        <h2>Estamos muy felices de compartir nuestro talento.</h2>
        <br />
        <p>Nuestros servicios:</p>
        <ul>
          <li>Ambientacion de eventos sociales.</li>
          <li>Bailes tipicos Colombianos.</li>
          <li>Coreografias para eventos sociales.</li>
          <li>Clases de baile.</li>
        </ul>
      </div>
     </div>
    </main>
  )
}
