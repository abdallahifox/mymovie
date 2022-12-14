import React from "react";
import Layout from "./../Components/Layout/Layout";

import "./../styles/base.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
