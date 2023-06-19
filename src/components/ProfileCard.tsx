import { StaticImageData } from 'next/image'
import styles from '../styles/ProfileCard.module.css'
import Image from 'next/image'

type ProfileCardProps = {
  name: string,
  photo: StaticImageData,
  info: string[]
}

function ProfileCard({ name, photo, info}: ProfileCardProps) {
  return(
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <div className={ name == "Juliana Guerrero Pérez" ?  styles.reverse : styles.photoAndInfo}>
        <Image src={photo} alt={name} className={styles.photo} />
        <div className={styles.info}>
          {info.map((item) => (
            <p key={item}>{item}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard