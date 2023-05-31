import React, { useEffect } from "react";
import styles from "@/styles/Skills.module.css";
import TagCloud from "TagCloud";
export default function Skills() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Next.js",
        "Shell",
        "MongoDB",
      ];

      const options = {
        radius: 230,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  },[]);
  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.description}>
        <h2>Soft Skills</h2>
        <p>
          Der Hauptbereich der Expertise liegt in der Frontend-Entwicklung
          (Client-Seite des Webs). <br/>HTML, CSS, JS, Erstellung von kleinen und
          mittleren Webanwendungen mit Next.js oder React, benutzerdefinierte
          Plugins, Funktionen, Animationen und das Programmieren interaktiver
          Layouts.
        </p>
      </div>

      <div className={styles.skills_sphere}>
        <span className="tagcloud"></span>
      </div>
    </section>
  );
  /* return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.skills_description}>
        <h2>Soft Skills & Erfahrung</h2>
        <Image
          src="/git-svgrepo-com.svg"
          alt="Git Icon"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.skills}></div>
    </section>
  ); */
}
