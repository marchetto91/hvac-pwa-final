import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>HVAC AI Web App Base</h1>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />
      <p>Benvenuto! Questa è la versione iniziale della tua app.</p>
    </div>
  );
}
