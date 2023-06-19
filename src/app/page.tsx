import Image from 'next/image'
import styles from './page.module.css'
import pareja from '../assets/pareja.png'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>RAICES DE MI TIERRA</h1>
     <div className={styles.photoAndInfo}>
      <Image src={pareja} alt="Pareja" className={styles.photo} />
      <div className={styles.info}>
        <h2>¡Estamos muy felices de compartir nuestro talento!</h2>
        <br />
        <h3>Nuestros servicios:</h3>
        <ul className={styles.ourServices}>
          <li>Ambientación de eventos sociales.</li>
          <li>Bailes típicos Colombianos.</li>
          <li>Coreografías para eventos artísticos y sociales.</li>
          <li>Coreografía de danza contemporánea.</li>
          <li>Clases de baile sociales.</li>
        </ul>
        <br />
        <ul className={styles.genres}>
          <li>Salsa.</li>
          <li>Bachata.</li>
          <li>Merengue.</li>
          <li>Folclor colombiano.</li>
          <li>Danza contemporanea.</li>
          <li>Hip hop.</li>
        </ul>
      </div>
     </div>
    </main>
  )
}
