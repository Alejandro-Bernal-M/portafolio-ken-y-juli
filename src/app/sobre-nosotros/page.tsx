import ProfileCard from "@/components/ProfileCard"
import ken from '../../assets/ken.png'
import juli from '../../assets/juli.png'
import { StaticImageData } from "next/image"

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
        "Bailarin profesional de danzas folcloricas Colombianas.",
        "Coreografo de bailes tipicos Colombianos.",
        "Bailarin de salsa y bachata.",
        "Profesor de baile.",
        "Bailarin profesional de baile contemporaneo."
      ]
    },
    "juli" : {
      name: "Juliana Florez Patiño",
      photo: juli,
      info: [
        "Bailarina profesional de danzas folcloricas Colombianas.",
        "Coreografa de bailes tipicos Colombianos.",
        "Bailarina de salsa y bachata.",
        "Profesora de baile."
      ]
    }
  } 
  return (
    <section>
      <h1>Sobre nosotros</h1>
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