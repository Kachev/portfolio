import Navigation from "../Navigation";
import styles from "../../styles/Header.module.css"
import Protfolio from "../Main/Profile/Desctiption/Portfolio";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Protfolio/>
    </header>
  );
}
