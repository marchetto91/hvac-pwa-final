import { useState } from 'react';

export default function NuovoRilevamento() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [parsedData, setParsedData] = useState(null);
  const [rawText, setRawText] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('/api/ocr', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setParsedData({
      serial: data.parsedData?.serial || '',
      model: data.parsedData?.model || '',
      voltage: data.parsedData?.voltage || '',
      pressure: data.parsedData?.pressure || '',
      temperature: data.parsedData?.temperature || ''
    });
    setRawText(data.rawText);
    setIsLoading(false);
  };

  const handleConfirm = async () => {
    if (!parsedData) return;

    const response = await fetch('/api/salva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsedData)
    });

    if (response.ok) {
      alert('Dati salvati con successo!');
    } else {
      alert('Errore durante il salvataggio');
    }
  };

  return (
    <div>
      <h2>📸 Nuovo Rilevamento</h2>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? 'Analizzando...' : 'Esegui OCR'}
      </button>

      {rawText && (
        <div style={{ marginTop: '20px' }}>
          <h3>Testo riconosciuto:</h3>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>{rawText}</pre>
        </div>
      )}

      {parsedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Dati estratti (modificabili):</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>Serial: </label>
            <input type="text" value={parsedData.serial} onChange={(e) => setParsedData({ ...parsedData, serial: e.target.value })} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Modello: </label>
            <input type="text" value={parsedData.model} onChange={(e) => setParsedData({ ...parsedData, model: e.target.value })} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Voltaggio: </label>
            <input type="text" value={parsedData.voltage} onChange={(e) => setParsedData({ ...parsedData, voltage: e.target.value })} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Pressione: </label>
            <input type="text" value={parsedData.pressure} onChange={(e) => setParsedData({ ...parsedData, pressure: e.target.value })} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Temperatura: </label>
            <input type="text" value={parsedData.temperature} onChange={(e) => setParsedData({ ...parsedData, temperature: e.target.value })} />
          </div>

          <button onClick={handleConfirm} style={{ marginTop: '10px' }}>
            Conferma e Salva
          </button>
        </div>
      )}
    </div>
  );
}
