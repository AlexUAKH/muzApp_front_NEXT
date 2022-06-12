import React, { FC, ReactNode, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import styles from "../styles/MainLayout.module.scss";
import { useState } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = props => {
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
          content="Music library with player and comments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
