import styles from '../../styles/Contacto.module.css'

function Contacto() {
    return(
        <section className={styles.section}>
            <h1>Contacto</h1>
            <p>Si te interesan nuestros servicios o requieres más información, no dudes en contactarnos.</p>
            <p>Estaremos dispuestos a resolver todas tus dudas. 😃</p>
            <ul>
                <li> 📧 raicesdemitierra418@gmail.com </li>
                <li> 📞 603 52 97 86 </li>
                <li> 📞 605 55 99 00 </li>
            </ul>
        </section>
    )
}

export default Contacto;