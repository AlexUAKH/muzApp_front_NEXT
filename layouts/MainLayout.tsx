import React, { FC, ReactElement, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/MainLayout.module.scss";
import { useState } from "react";

interface Props {
  children: ReactElement;
}

const MainLayout: FC<Props> = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const { children } = props;

  useEffect(() => setLoading(false));

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.wraper}>
      <Head>
        <title>Music library</title>
        <meta
          name="description"
          content="Muzic library with player and comments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
