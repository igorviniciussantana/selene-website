"use client";
import Link from "next/link";
import styles from "./Whatsapp.module.scss";


export default function Whatsapp() {


    return (

        <Link href="https://wa.me/5521973729696" className={styles.whatsapp_wrapper}>
            <img src="/whatsapp-light.svg" />
            <h3>Entrar em contato</h3>

        </Link>
    );
}
