"use client";
import styles from "./Info.module.scss";
import { Space_Grotesk } from "next/font/google";
import { CheckCircle } from "@phosphor-icons/react";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Info() {
  return (
    <div className={styles.info_wrapper}>
      <h3 className={styles.info_title}>
        Na nossa empresa, acreditamos no <b>poder da tecnologia</b> para
        impulsionar o <b>sucesso dos negócios.</b> Nossas soluções de software
        personalizado são projetadas para atender às suas necessidades
        exclusivas, fornecendo
        <b> eficiência, automação e resultados tangíveis.</b> Desde aplicativos
        móveis intuitivos até sistemas de gestão robustos, estamos comprometidos
        em desenvolver soluções que potencializem seu negócio e melhorem sua
        vantagem competitiva.
      </h3>
      <div className={styles.list_wrapper}>
        <div className={styles.info_list}>
          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            Soluções sob medida para empresas de todos os tamanhos
          </span>

          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            Experiência em diversas indústrias, desde varejo até saúde e
            finanças
          </span>

          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            Equipe de desenvolvimento altamente qualificada e comprometida
          </span>
        </div>

        <div className={styles.info_list}>
          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            <span>
              Qualidade excepcional com foco na usabilidade e experiência do
              usuário
            </span>
          </span>

          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            Entrega dentro do prazo e dentro do orçamento
          </span>

          <span className={styles.list_item}>
            <CheckCircle color="#7A32C6" weight="fill" size={20} />
            Suporte técnico contínuo para garantir o sucesso a longo prazo
          </span>
        </div>
      </div>
    </div>
  );
}
