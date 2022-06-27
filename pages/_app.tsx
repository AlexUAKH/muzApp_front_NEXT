import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../store';
import "../styles/main.scss";
import MainLayout from "../layouts/MainLayout";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <MainLayout>
      <Component {...pageProps} />;
    </MainLayout>
  )
}

export default wrapper.withRedux(WrappedApp);



