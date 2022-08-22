import Head from "next/head";
import Layout from '../component/ui/Layout'
import '../styles/css/plugins.css'
import '../styles/css/main.css'

const MyApp = ({ Component, pageProps }) => (
    <Layout>

      <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Pustok - Book Store HTML Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/*<link rel="stylesheet" type="text/css" media="screen"  href="/css/plugins.css" />*/}



      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
);

export default MyApp;
