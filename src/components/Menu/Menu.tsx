"use client";
import Link from "next/link";
import styles from "./Menu.module.scss";
import { MenuItems } from "./items";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.menu_wrapper}>
      <p id={styles.menu_button} onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
        menu
      </p>
      <img src="logo.svg" />

      <div
        className={styles.menu_items}
        style={{ left: isMenuOpen ? 0 : "-100%", transition: ".5s" }}
      >
        <p onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
          close
        </p>
        {MenuItems.map((item) => {
          return <Link href={item.url}>{item.name}</Link>;
        })}
      </div>
    </div>
  );
}
