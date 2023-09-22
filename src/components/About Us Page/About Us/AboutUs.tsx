"use client";
import Link from "next/link";
import styles from "./AboutUs.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
import Lottie from "lottie-react";
import techAnimation from "./../../../../public/animations/tech.json";
import handshakeAnimation from "./../../../../public/animations/handshake.json";
import developAnimation from "./../../../../public/animations/develop.json";
import businessAnimation from "./../../../../public/animations/business.json";
import supportAnimation from "./../../../../public/animations/support.json";



export default function AboutUs() {
  return (
    <div>
      <div className={styles.about_wrapper}>
        <div className={styles.about_content}>
          <h1
            className={styles.about_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Quem Somos
          </h1>

          <p
            className={styles.about_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Somos uma equipe apaixonada por tecnologia e especializada em
            desenvolvimento de software. Nosso objetivo é fornecer soluções
            inovadoras e personalizadas que atendam às necessidades exclusivas
            dos nossos clientes. Combinamos expertise técnica, criatividade e
            comprometimento para entregar resultados excepcionais e impulsionar
            o sucesso dos negócios.
          </p>
        </div>
        <Lottie className={styles.lottie} animationData={techAnimation} />
      </div>

      <div className={`${styles.about_wrapper} ${styles.bg_purple}`}>
        <Lottie animationData={handshakeAnimation} />
        <div className={styles.about_content}>
          <h1
            className={styles.about_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nossa Missão
          </h1>

          <p
            className={styles.about_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Nosso objetivo é fornecer soluções de software inovadoras e de alta
            qualidade que impulsionem o sucesso dos nossos clientes. Através do
            uso de tecnologias avançadas e de uma abordagem colaborativa,
            buscamos simplificar processos, aumentar a eficiência e agregar
            valor aos negócios. Nosso compromisso é oferecer resultados
            excepcionais, aliados a um excelente atendimento ao cliente e à
            ética profissional, sempre com foco na satisfação e no crescimento
            dos nossos parceiros de negócios.
          </p>
        </div>
      </div>

      <div className={styles.about_wrapper}>
        <div className={styles.about_content}>
          <h1
            className={styles.about_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nossa Experiência
          </h1>

          <p
            className={styles.about_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Com anos de experiência no setor, acumulamos um vasto conhecimento
            em diversas indústrias, desde e-commerce e fintech até saúde e
            educação. Trabalhamos com empresas de todos os tamanhos, desde
            startups promissoras até grandes corporações, adaptando nossos
            serviços às necessidades específicas de cada cliente. Nossa equipe é
            composta por profissionais altamente qualificados e comprometidos em
            fornecer soluções de software de alta qualidade.
          </p>
        </div>
        <Lottie className={styles.lottie} id={styles.develop} animationData={developAnimation} />
      </div>

      <div className={`${styles.about_wrapper} ${styles.bg_purple}`}>
        <Lottie animationData={businessAnimation} />
        <div className={styles.about_content}>
          <h1
            className={styles.about_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nossos Valores
          </h1>

          <p
            className={styles.about_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Integridade, inovação e excelência são os pilares que norteiam nossa
            empresa. Valorizamos a transparência em nossos relacionamentos com
            clientes, parceiros e colaboradores. Buscamos constantemente a
            inovação, mantendo-nos atualizados com as últimas tendências e
            tecnologias. Nosso compromisso com a excelência reflete-se em cada
            projeto que realizamos, desde a análise inicial até a implementação
            final.
          </p>
        </div>
      </div>

      <div className={styles.about_wrapper}>
        <div className={styles.about_content}>
          <h1
            className={styles.about_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nosso Compromisso
          </h1>

          <p
            className={styles.about_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Estamos comprometidos em fornecer soluções personalizadas que
            atendam às necessidades exclusivas de cada cliente. Nossa abordagem
            é centrada no cliente, buscando entender seus desafios e metas para
            desenvolver soluções sob medida que agreguem valor real ao seu
            negócio. Trabalhamos em estreita colaboração com nossos clientes,
            garantindo uma comunicação clara e eficiente em todas as etapas do
            projeto.
          </p>
        </div>
        <Lottie className={styles.lottie} animationData={supportAnimation} />
      </div>
    </div>
  );
}
