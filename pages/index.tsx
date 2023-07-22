import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "components/Header";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <Head>
        <title>How-much</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h2 style={{ textAlign: "center", fontWeight: 400 }}>꽃 사입 챗봇 서비스</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Link
          href="/login"
          style={{ textDecoration: "none" }}
        >
          <button className={styles.button}>
            로그인 하러가기
          </button>
        </Link>
      </div>
    </>
  );
}
