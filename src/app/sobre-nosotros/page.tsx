import ProfileCard from "@/components/ProfileCard"
import ken from '../../assets/ken.png'
import juli from '../../assets/juli.png'
import { StaticImageData } from "next/image"
import styles from '../../styles/ProfileCard.module.css'

function SobreNosotros() {
  type Profiles = {
    [key: string]: {
      name: string,
      photo: StaticImageData,
      info: string[]
    }
  }
  const Profiles: Profiles = {
    "ken" : {
      name: "Kenyth Jaramillo Bernal",
      photo: ken,
      info: [
        "Bailarín profesional de danzas folcloricas Colombianas.",
        "Coreografo de bailes típicos Colombianos.",
        "Bailarín de salsa y bachata.",
        "Profesor de baile.",
        "Bailarín profesional de baile contemporaneo."
      ]
    },
    "juli" : {
      name: "Juliana Florez Patiño",
      photo: juli,
      info: [
        "Bailarina profesional de danzas folcloricas Colombianas.",
        "Coreografa de bailes típicos Colombianos.",
        "Bailarina de salsa y bachata.",
        "Profesora de baile."
      ]
    }
  } 
  return (
    <section className={styles.section}>
      <h1>¿Quienes somos?</h1>
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