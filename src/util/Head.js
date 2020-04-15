// npm
import Head from 'next/head'

// default
export default function HeadHtml({pageTitle}) {
  return (
    <Head>
      <title>{pageTitle} - Dashboard Visualization</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"/>
    </Head>
  );
}