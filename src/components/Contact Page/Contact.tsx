"use client";
import Link from "next/link";
import styles from "./Contact.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_content}>
        <h1
          className={styles.contact_title}
          data-aos="fade-up"
          data-aos-once="true"
        >
          Venha fazer parte!
        </h1>

        <p
          className={styles.contact_description}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Conheça soluções personalizadas para sua empresa e deixe a Selene
          guiar seus processos tecnológicos!
        </p>

        <button
          className={`${styles.primary_button} ${space_grotesk.className}`}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <img src="/whatsapp-light.svg" className={styles.icon} />
          Entre em Contato
        </button>
      </div>
      <div className={styles.contact_card}>
        <h1>INFORMAÇÕES</h1>
        <div className={styles.contact}>
          <img src="/whatsapp-light.svg" className={styles.icon} />
          <p className={styles.tel}>+55 51 8187-7186</p>
        </div>

        <div className={styles.contact}>
          <img src="/email-light.svg" className={styles.icon} />
          <p className={styles.tel}>selene@gmail.com</p>
        </div>

        <Link href="https://instagram.com/selenetecnologia" target="_blank">
          <div className={`${styles.contact} ${styles.dark_bg}`}>
            <img src="/instagram.svg" className={styles.icon} />
            <p className={styles.tel}>Instagram</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
