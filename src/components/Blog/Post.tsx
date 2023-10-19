"use client"

import { useSearchParams } from "next/navigation";
import { Posts } from "@/components/Blog/posts";
import styles from './Post.module.scss'

import { useEffect, useState } from "react";

import parse from 'html-react-parser';


export default function Post() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const Post = Posts[id];
  const date = new Date(Post.date);
  return (
    <div className={styles.post_wrapper}>
    <div
      className={styles.post_cover}
      style={{
        backgroundImage:
          Post.img != "" ? `url(${Post.img})` : "url(/background2.png)",
      }}
    ></div>
    <h1 className={styles.post_title}>{Post.name}</h1>
    <p className={styles.post_date}><img src="/calendar.svg" />{date.toLocaleDateString("pt-br")}</p>
    <p className={styles.post_text}>{parse(Post.text)}</p>
  </div>
  );
}
