import Layout from "src/components/layout";
import Head from "next/head";
import "src/styles/index.less";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NEXT JS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
