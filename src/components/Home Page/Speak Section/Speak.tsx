"use client";
import styles from "./Speak.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Speak() {
  return (
    <div className={styles.speak_wrapper}>
      <div className={styles.speak_content}>
        <p
          className={styles.speak_text}
          data-aos="fade-up"
          data-aos-once="true"
        >
          &ldquo;O trabalho da equipe de desenvolvimento de software superou
          nossas expectativas. Eles entenderam completamente nossas necessidades
          e criaram uma solução personalizada que aumentou nossa eficiência
          operacional e melhorou a experiência dos nossos clientes. Recomendamos
          fortemente seus serviços!&quot;
        </p>

        <p
          className={styles.speak_author}
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-once="true"
        >
          - Cliente Satisfeito
        </p>
      </div>

      <div className={styles.chat}>
        <p className={styles.background_word}>satisfeito</p>
      </div>
    </div>
  );
}
