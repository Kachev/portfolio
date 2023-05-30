/* eslint-disable @next/next/no-img-element */
import styles from "../../../../../styles/PortFolio.module.css";

export default function Protfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img
          src="/ProfilBild.jpg"
          alt="Acount Page"
        />
      </div>
    </div>
  );
}
