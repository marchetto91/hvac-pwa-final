export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>HVAC AI APP</h1>
      <nav style={{ marginBottom: '20px' }}>
        <a href="/nuovo-rilevamento" style={{ marginRight: '20px', fontSize: '18px' }}>📸 Nuovo Rilevamento</a>
        <a href="/storico" style={{ fontSize: '18px' }}>📊 Storico Rilevamenti</a>
      </nav>
      <hr />
      <Component {...pageProps} />
    </div>
  );
}
