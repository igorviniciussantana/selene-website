"use client";
import Link from "next/link";
import styles from "./Products.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
import { Services } from "./services";

export default function Products() {
  return (
    <div>
      <div className={styles.products_wrapper}>
        <div className={styles.products_content}>
          <h1
            className={styles.products_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Nossos Serviços
          </h1>

          <p
            className={styles.products_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Oferecemos uma ampla gama de serviços de desenvolvimento de software
            personalizados para atender às necessidades exclusivas do seu
            negócio. Combinamos nossa expertise técnica e criatividade para
            criar soluções inovadoras que impulsionam a eficiência, a
            produtividade e o crescimento do seu negócio. Descubra como podemos
            ajudar você a alcançar seus objetivos com nossos serviços de alta
            qualidade.
          </p>
        </div>
        <img src="/services.png" className={styles.img}/>
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
              <h3>{index + 1}</h3>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.bg_purple} >
        <h1 data-aos="fade-up"
            
            data-aos-once="true">
          Entre em contato conosco para discutir suas necessidades e descobrir
          como nossos serviços de desenvolvimento de software podem impulsionar
          o sucesso do seu negócio.
        </h1>

        <button className={`${styles.primary_button} ${space_grotesk.className}`} data-aos="fade-up"
            data-aos-delay="200" data-aos-once="true">
      
        Transforme suas ideias em realidade hoje mesmo!
        
      </button>
      </div>
    </div>
  );
}
