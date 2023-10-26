"use client";
import Link from "next/link";
import styles from "./Process.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
import { Services } from "./processes";
import { useRouter } from 'next/navigation'

export default function Process() {
  const router = useRouter()
  return (
    <div>
      <div className={styles.process_wrapper}>
        <div className={styles.process_content}>
          <h1
            className={styles.process_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nosso Processo de Desenvolvimento
          </h1>

          <p
            className={styles.process_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Em nossa empresa, seguimos um processo de desenvolvimento
            estruturado e eficiente para garantir a entrega de soluções de
            software de alta qualidade. Nossa abordagem combina metodologias
            ágeis, expertise técnica e colaboração próxima com nossos clientes.
            Ao longo de cada etapa do processo, estamos focados em entender suas
            necessidades, superar desafios e fornecer resultados excepcionais.
          </p>
        </div>
        <img src="/processos.png" className={styles.img} />
      </div>

      <div className={styles.cards_wrapper}>
        {Services.map((service, index) => {
          return (
            <div
              className={styles.service_card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
              key={service.name}
            >
              <h3 className={styles.etapa}>ETAPA {index + 1}</h3>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.bg_purple}>
        <div className={styles.tags}>
          <h3 data-aos="fade-up" data-aos-once="true">#desenvolvimento</h3>
          <h3 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">#inovação</h3>
          <h3 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">#tecnologia</h3>
        </div>
        <h1 data-aos="fade-up" data-aos-once="true">
          Entre em contato conosco para saber mais sobre nosso processo de
          desenvolvimento e como podemos ajudar a transformar suas ideias em
          soluções de software de sucesso.
        </h1>

        <button
          className={`${styles.primary_button} ${space_grotesk.className}`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          onClick={() => router.push('/contato')}
        >
          Transforme suas ideias em realidade!
        </button>
      </div>
    </div>
  );
}
