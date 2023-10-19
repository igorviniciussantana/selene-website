"use client";
import styles from "./Portfolio.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
import { Projects } from "./projects";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter()
  return (
    <div>
      <div className={styles.portfolio_wrapper}>
        <div className={styles.portfolio_content}>
          <div
            className={styles.portfolio_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2>NOSSO</h2>
            <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              PORTFÓLIO
            </h1>
          </div>

          <p
            className={styles.portfolio_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Estamos orgulhosos de compartilhar alguns dos projetos que
            concluímos com sucesso para nossos clientes. Cada projeto representa
            nosso compromisso com a{" "}
            <b>excelência, criatividade e entrega de soluções sob medida</b>.
            Esses exemplos ilustram nosso expertise técnico e nossa capacidade
            de enfrentar desafios e alcançar resultados excepcionais. Dê uma
            olhada em nosso portfólio e veja como ajudamos outras empresas a
            alcançar seus objetivos..
          </p>
        </div>
      </div>

      <div className={styles.cards_wrapper}>
        {Projects.map((project, index) => {
          return (
            <div
              className={styles.project_card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
              key={project.name}
            >
              <div
                className={styles.cover}
                style={{
                  backgroundImage: project.img != "" ? `url(${project.img})` : "url(background2.png)",
                }}
              ></div>
              <h3 className={styles.etapa}>PROJETO {index + 1}</h3>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.bg_purple}>
        <div className={styles.tags}>
          <h3 data-aos="fade-up" data-aos-once="true">
            #portfolio
          </h3>
          <h3 data-aos="fade-up" data-aos-once="true">
            #desenvolvimento
          </h3>
          <h3 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            #inovação
          </h3>
          <h3 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            #tecnologia
          </h3>
        </div>
        <h1 data-aos="fade-up" data-aos-once="true">
          Gostaria de ver mais projetos em nosso portfólio? Entre em contato
          conosco para saber como podemos ajudar a impulsionar o seu negócio por
          meio do desenvolvimento de software personalizado.
        </h1>

        <button
          className={`${styles.primary_button} ${space_grotesk.className}`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          onClick={() => router.push('/contato')}
        >
          Transforme suas ideias em realidade hoje mesmo!
        </button>
      </div>
    </div>
  );
}
