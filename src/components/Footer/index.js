import ContactLinks from "../Main/Profile/Links";
import styles from "../../styles/Footer.module.css"

export default function Footer(){
    return (
        <footer className={styles.footer} id="contact">
            <section>
                <ContactLinks/>
            </section>
        </footer>
    );
}