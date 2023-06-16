import styles from '../../styles/Contacto.module.css'

function Contacto() {
    return(
        <section className={styles.section}>
            <h1>Contacto</h1>
            <p>Si te interesan nuestros servicios o requieres más información, no dudes en contactarnos.</p>
            <p>Estaremos dispuestos a resolver todas tus dudas. 😃</p>
            <ul>
                <li> 📧 correo@correo.com </li>
                <li> 📞 123 456 7890 </li>
            </ul>
        </section>
    )
}

export default Contacto;