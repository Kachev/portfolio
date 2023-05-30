import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";


export default function ContactLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.line1}></div>
      <Link
        href="https://www.linkedin.com/in/hristo-kachev-a06703270/"
        target="_blank"
      >
        <Image
          src="/linkedin.png"
          alt="Linkendin icon"
          width={34}
          height={34}
        />
      </Link>
      <div className={styles.line2}></div>
      <Link href="https://www.github.com/Kachev" target="_blank">
        <Image src="/github.png" alt="GitHub icon" width={34} height={34} />
      </Link>
      <div className={styles.line1}></div>
    </section>
  );
}
