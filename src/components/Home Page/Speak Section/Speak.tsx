"use client";
import styles from "./Speak.module.scss";
import { Space_Grotesk } from "next/font/google";
import { Fade } from "react-awesome-reveal"

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Speak() {
  return (
    <div className={styles.speak_wrapper}>
      <div className={styles.speak_content}>
        <Fade direction="left" triggerOnce>
        <p className={styles.speak_text}>
          &ldquo;O trabalho da equipe de desenvolvimento de software superou
          nossas expectativas. Eles entenderam completamente nossas necessidades
          e criaram uma solução personalizada que aumentou nossa eficiência
          operacional e melhorou a experiência dos nossos clientes. Recomendamos
          fortemente seus serviços!&quot;
        </p>
        </Fade>
        <Fade direction="left" delay={100} triggerOnce>
        <p className={styles.speak_author}>- Cliente Satisfeito</p>
        </Fade>
      </div>

      <div className={styles.chat}>
        <p className={styles.background_word}>satisfeito</p>
      </div>
    </div>
  );
}
