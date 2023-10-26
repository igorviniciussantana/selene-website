"use client";
import styles from "./Info.module.scss";
import { Space_Grotesk } from "next/font/google";
import { CheckCircle } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation'

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Info() {

  const router = useRouter()

  return (
    <div className={styles.info_wrapper}>
     
      <h3 className={styles.info_title} data-aos="fade-up"
            data-aos-delay="200" data-aos-once="true">
        Na nossa empresa, acreditamos no <b>poder da tecnologia</b> para
        impulsionar o <b>sucesso dos negócios.</b> Nossas soluções de software
        personalizado são projetadas para atender às suas necessidades
        exclusivas, fornecendo
        <b> eficiência, automação e resultados tangíveis.</b>
      </h3>
      
      <div  className={styles.list_wrapper}>
     
        <div className={styles.info_list} data-aos="fade-up"
            data-aos-delay="200" data-aos-once="true">
          <span className={styles.list_item}>
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Soluções sob medida para empresas de todos os tamanhos
          </span>

          <span className={styles.list_item}>
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Experiência em diversas indústrias, desde varejo até saúde e
            finanças
          </span>

          <span className={styles.list_item}>
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Equipe de desenvolvimento altamente qualificada e comprometida
          </span>
        </div>
       
      
        <div className={styles.info_list} data-aos="fade-up"
            data-aos-delay="200" data-aos-once="true">
          <span className={styles.list_item}>
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Qualidade excepcional com foco na usabilidade e experiência do
            usuário
          </span>

          <span className={styles.list_item}>
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Entrega dentro do prazo e dentro do orçamento estipulado com o cliente
          </span>

         

          <span className={styles.list_item} >
            <CheckCircle
              color="#7A32C6"
              weight="fill"
              size={20}
              className={styles.item_icon}
            />
            Suporte técnico contínuo para garantir o sucesso a longo prazo
          </span>
        </div>
        
      </div>
     
      <button className={`${styles.primary_button} ${space_grotesk.className}`} data-aos="fade-up"
            data-aos-delay="200" data-aos-once="true" onClick={() => router.push('/contato')}>
      
      Transforme suas ideias em realidade

        
      </button>
      
    </div>
  );
}
