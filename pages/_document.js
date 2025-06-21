import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="HVAC AI App" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
