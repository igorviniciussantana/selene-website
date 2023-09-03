"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
        <img src="logo-light.svg" className={styles.footer_logo} />
      <p className={styles.footer_copyright}>
        © SELENE TECNOLOGIA, 2023. TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
}
