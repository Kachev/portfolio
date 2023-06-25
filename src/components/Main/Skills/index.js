import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import styles from "@/styles/Skills.module.css";
export default function Skills() {
  const containerRef = useRef(null);
  useEffect(() => {
    return () => {
      const container = containerRef.current;
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
        radius:
          window.innerWidth < 800 ? 150 : window.innerWidth < 1100 ? 180 : 260,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
      return () => {
        const tagCloudContainer = container.querySelector(".tagcloud");
    tagCloudContainer.innerHTML = "";
      };
    };
  }, []);
  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.description}>
        <h2>Soft Skills</h2>
        <p>
          Der Hauptbereich der Expertise liegt in der Frontend-Entwicklung
          (Client-Seite des Webs). <br />
          HTML, CSS, JS, Erstellung von kleinen und mittleren Webanwendungen mit
          Next.js oder React, benutzerdefinierte Plugins, Funktionen,
          Animationen und das Programmieren interaktiver Layouts.
        </p>
      </div>

      <div className={styles.skills_sphere}>
        <span ref={containerRef}></span>
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
