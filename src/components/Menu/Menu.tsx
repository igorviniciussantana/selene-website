"use client";
import Link from "next/link";
import styles from "./Menu.module.scss";
import { MenuItems } from "./items";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.menu_wrapper}>
      <img
        src="/icons/menus.svg"
        id={styles.menu_button}
        alt="Logo da Empresa Selene Tecnologia"
        onClick={(e) => setIsMenuOpen(!isMenuOpen)}
      />
     
      <img src="/logo.svg" id={styles.menu_logo} />
     
      <img
        src="/icons/menus.svg"
        id={styles.menu_hidden}
      />

      <div
        className={styles.menu_items}
        style={{ left: isMenuOpen ? 0 : "-100%", transition: ".5s" }}
      >
        <img
          src="/icons/cross.svg"
          className={styles.menu_close}
          onClick={(e) => setIsMenuOpen(!isMenuOpen)}
        />

        {MenuItems.map((item) => {
          return <Link href={item.url} key={item.url}>{item.name}</Link>;
        })}
      </div>
    </div>
  );
}
