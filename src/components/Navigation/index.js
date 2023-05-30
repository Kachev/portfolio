import Link from "next/link";
import styles from "../../styles/Header.module.css";
export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <input className={styles.toggle_button} type="checkbox" id="toggle_button" />
        <label className={styles.label} htmlFor="toggle_button">
          <span className="material-symbols-rounded">menu</span>
        </label>
        <ul>
          <li>
            <Link href="#about_me" alt="About me">
              About me
            </Link>
          </li>
          <li>
            <Link href="#skills" alt="Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" alt="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <h1>
        Hristo Kachev <br />
        (Junior)<span>Webdeveloper</span>
      </h1>
    </div>
  );
}
