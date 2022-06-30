import React, {FC, ReactNode, useCallback, useEffect, useState} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Player from "../components/Player";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({children}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const active = true;

  const onRouteChangeStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onRouteChangeDone = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeDone);
    router.events.on('routeChangeError', onRouteChangeDone);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeDone);
      router.events.off('routeChangeError', onRouteChangeDone);
    };
  }, [onRouteChangeDone, onRouteChangeStart, router.events]);

  return (
    <>
    <div className={styles.wraper}>
      <Head>
        <title>Music library</title>
        <meta
          name="description"
          content="Music library with player and comments"
        />
        <meta name="viewport" content="width=device-width, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <Container>
          {children}
        </Container>
      </main>
      {active && <Box sx={{height: '20px'}}></Box>}
      <Player />
      <Footer/>
    </div>
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: 'blur(8px)'
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </>
  );
};

export default MainLayout;
