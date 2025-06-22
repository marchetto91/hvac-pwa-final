import { useEffect, useState } from 'react';

export default function Storico() {
  const [rilevamenti, setRilevamenti] = useState([]);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    fetch('/api/storico')
      .then(res => res.json())
      .then(data => setRilevamenti(data))
      .catch(err => setErrore(err.message));
  }, []);

  return (
    <div>
      <h2>📊 Storico Rilevamenti</h2>

      {errore && <p style={{ color: 'red' }}>Errore: {errore}</p>}

      {rilevamenti.length === 0 ? (
        <p>Nessun rilevamento registrato ancora.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th>ID</th>
              <th>Serial</th>
              <th>Modello</th>
              <th>Voltaggio</th>
              <th>Pressione</th>
              <th>Temperatura</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {rilevamenti.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.serial}</td>
                <td>{item.model}</td>
                <td>{item.voltage}</td>
                <td>{item.pressure}</td>
                <td>{item.temperature || '-'}</td>
                <td>{new Date(item.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
