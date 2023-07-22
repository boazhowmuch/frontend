import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import SideBar from "components/SideBar";
import Header from "components/Header";

export default function Home() {

  const getLogin = () => {
    axios
      .post("/api/login", {
        username: "test",
        password: "test"
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>How-much</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1>How-much</h1>
      <p>이 꽃 얼마에요?</p>
      <button onClick={getLogin}>로그인</button>
    </>
  );
}
