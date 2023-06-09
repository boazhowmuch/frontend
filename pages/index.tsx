import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>How-much</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/images/logo.svg" />
      <h1>How-much</h1>
      <p>이 꽃 얼마에요?</p>
    </>
  );
}
