import ProfileCard from "@/components/ProfileCard"
import kenyth from '../../assets/ken.jpeg'
import juliana from '../../assets/juliana.jpeg'
import { StaticImageData } from "next/image"
import styles from '../../styles/ProfileCard.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.jpeg'

function SobreNosotros() {
  type Profiles = {
    [key: string]: {
      name: string,
      photo: StaticImageData,
      info: string[]
    }
  }
  const Profiles: Profiles = {
    "kenyth" : {
      name: "Kenyth Jaramillo Bernal",
      photo: kenyth,
      info: [
        "Bailarín profesional de danzas folcloricas Colombianas.",
        "Coreografo de bailes típicos Colombianos.",
        "Coreografo de bailes danza contemporanea.",
        "Bailarín de ritmos latinos.",
        "Profesor de baile.",
        "Bailarín profesional de danza contemporaneo."
      ]
    },
    "juliana" : {
      name: "Juliana Guerrero Pérez",
      photo: juliana,
      info: [
        "Bailarina profesional de danzas folcloricas Colombianas.",
        "Coreografa de bailes típicos Colombianos.",
        "Producción de maquillaje para eventos artísticos y sociales.",
        "Bailarina de ritmos latinos.",
        "Profesora de bailes sociales."
      ]
    }
  } 
  return (
    <section className={styles.section}>
      <div className={styles.titleAndLogo}>
        <h1>¿Quienes somos?</h1>
        <Image src={logo} alt= 'logo' className={styles.logo} />
      </div>
      {Object.keys(Profiles).map((person) => (
        <ProfileCard
          key={person}
          name={Profiles[person].name}
          photo={Profiles[person].photo}
          info={Profiles[person].info}
        />
      ))}
    </section>
  )
}

export default SobreNosotros