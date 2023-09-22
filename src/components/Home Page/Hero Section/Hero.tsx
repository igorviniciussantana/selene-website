"use client";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { Space_Grotesk } from "next/font/google";
import { Fade } from "react-awesome-reveal"


const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Hero() {

  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero_content}>
      <Fade direction="up" triggerOnce>
        <h1  className={styles.hero_title} >
          Transformando Ideias em Realidade: Desenvolvimento de Software e
          Soluções para Impulsionar seu Negócio!
        </h1>
        </Fade>

        <Fade direction="up"  delay={200} triggerOnce>
        <h2 className={styles.hero_subtitle}>
          Potencialize sua empresa com soluções de software sob medida e
          inovadoras
        </h2>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
        <p className={styles.hero_description}>
          Bem-vindo à nossa empresa de desenvolvimento de software! Nós somos
          especialistas em transformar ideias em soluções tecnológicas de ponta.
          Se você está procurando impulsionar seu negócio, melhorar seus
          processos e aumentar produtividade, você está no lugar certo. Nossa
          equipe está pronta para ajudar você a atingir seus objetivos e superar
          as expectativas do mercado.
        </p>
        </Fade>

        <Fade direction="up" triggerOnce delay={400}>
        <button
          className={`${styles.primary_button} ${space_grotesk.className}`}
        
        >
          Transforme suas ideias em realidade hoje mesmo!
        </button>
        </Fade>
        <Fade direction="up" triggerOnce delay={500}>
        <button
          className={`${styles.secondary_button} ${space_grotesk.className}`}
         
        >
          Entre em contato para uma consulta gratuita.
        </button>
        </Fade>
      </div>
      <img
        src="hero-img.png"
        alt="Imagens de desenvolvimento de tecnologia"
        className={styles.hero_img}
      />
    </div>
  );
}
