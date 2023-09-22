"use client";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero_content}>
        <h1
          className={styles.hero_title}
          data-aos="fade-up"
          data-aos-once="true"
        >
          Transformando Ideias em Realidade: Desenvolvimento de Software e
          Soluções para Impulsionar seu Negócio!
        </h1>

        <h2
          className={styles.hero_subtitle}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Potencialize sua empresa com soluções de software sob medida e
          inovadoras
        </h2>

        <p
          className={styles.hero_description}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Bem-vindo à nossa empresa de desenvolvimento de software! Nós somos
          especialistas em transformar ideias em soluções tecnológicas de ponta.
          Se você está procurando impulsionar seu negócio, melhorar seus
          processos e aumentar produtividade, você está no lugar certo. Nossa
          equipe está pronta para ajudar você a atingir seus objetivos e superar
          as expectativas do mercado.
        </p>

        <button
          className={`${styles.primary_button} ${space_grotesk.className}`}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Transforme suas ideias em realidade hoje mesmo!
        </button>

        <button
          className={`${styles.secondary_button} ${space_grotesk.className}`}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          Entre em contato para uma consulta gratuita.
        </button>
      </div>
      <img
        src="hero-img.png"
        alt="Imagens de desenvolvimento de tecnologia"
        className={styles.hero_img}
      />
    </div>
  );
}
