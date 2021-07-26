import Head from "next/head";
import Image from "next/image";
import { Banner } from "../Components/Banner/Banner";
import { NavigationBar } from "../Components/NavigationBar/NavigationBar";
import { Services } from "../Components/Services/Services";
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
      <Banner />
      <Services />
    </div>
  );
}
