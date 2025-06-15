function MyApp({ Component, pageProps }) {
return (
<>
<Head>
<link rel="icon" href="/logo.png" sizes="192x192" type="image/png" />
<link rel="apple-touch-icon" href="/logo.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
</Head>
<Component {...pageProps} />
</>
)
}

export default MyApp