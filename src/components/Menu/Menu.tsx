import Link from "next/link";
import styles from "./Menu.module.scss";
import { MenuItems } from "./items";

export default function Menu() {
  return (
    <div className={styles.menu_wrapper}>
      <img src="logo.svg" />

      <div className={styles.menu_items}>
        {MenuItems.map((item) => {
          return <Link href={item.url}>{item.name}</Link >;
        })}
      </div>
    </div>
  );
}
