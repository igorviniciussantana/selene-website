"use client";
import styles from "./Blog.module.scss";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
import { Posts } from "./posts";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <div className={styles.blog_wrapper}>
        <div className={styles.blog_content}>
          <div
            className={styles.blog_title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2>NOSSO</h2>
            <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
              BLOG
            </h1>
          </div>

          <p
            className={styles.blog_description}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Confira as últimas postagens relevantes da Selene que podem ajudar
            sua empresa de forma gratuita a atingir seus objetivos esperados!
          </p>
        </div>
      </div>

      <div className={styles.cards_wrapper}>
        {Posts.map((post, index) => {
          return (
            <Link
              href={`blog/post?id=${index.toString()}`}
              className={styles.post_card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
              key={post.name}
            >
              <div
                className={styles.cover}
                style={{
                  backgroundImage:
                    post.img != ""
                      ? `url(${post.img})`
                      : "url(background2.png)",
                }}
              ></div>
              <h3 className={styles.etapa}>POST {index + 1}</h3>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
