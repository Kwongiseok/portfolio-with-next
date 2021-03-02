import Head from "next/head";
import App from "next/app";
import "../common/global.css";

// import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Giseok's Portfolio</title>
        <meta
          name="description"
          content="Portfolio for Software Enginner Giseok"
        />
        <meta name="author" content="KwonGiSeok" />
        <link rel="icon" type="image/png" href="imgs/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
