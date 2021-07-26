import Head from "next/head";
import Image from "next/image";
import { NavigationBar } from "../Components/NavigationBar/NavigationBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SS Top Logistics</title>
        <meta
          name="description"
          content="SS Top Logistics international courier company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
    </div>
  );
}
