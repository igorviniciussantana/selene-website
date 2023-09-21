"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { MenuItems } from "./../Menu/items";

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>

      <div className={styles.footer_content}>

        <div className={styles.footer_left}>
          <img src="logo-light.svg" className={styles.footer_logo} />
          <p>
            Potencialize sua empresa com soluções de software sob medida e
            inovadoras
          </p>
        </div>

        <div className={styles.footer_right}>
          <div>
            <h2>Acesse</h2>
            <ul>
              {MenuItems.map((item) => {
                return (
                  <li>
                    <img src="/next.svg" className={styles.li_icon} />
                    <Link href={item.url} key={item.url}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Contato</h2>
            <ul>
              <li>
              <img src="/email.svg" className={styles.li_icon} />
                <p className={styles.contact}>selene@gmail.com</p>
                </li>
                <li>
              <img src="/whatsapp.svg" className={styles.li_icon} />
                <p className={styles.contact}>+55 51 8187-7186</p>
                </li>
            </ul>
          </div>
        </div>

      </div>
      <p className={styles.footer_copyright}>
        © SELENE TECNOLOGIA, 2023. TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
}
