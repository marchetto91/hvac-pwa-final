import fs from 'fs';
import { v1p3beta1 as vision } from '@google-cloud/vision';
import { GoogleAuth } from 'google-auth-library';

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64, 'base64').toString('utf8')
);

const client = new vision.ImageAnnotatorClient({
  credentials: {
    private_key: credentials.private_key,
    client_email: credentials.client_email,
  },
  projectId: credentials.project_id,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { imageData } = req.body;
    const buffer = Buffer.from(imageData.split(',')[1], 'base64');

    const [result] = await client.textDetection({ image: { content: buffer } });
    const detections = result.textAnnotations;
    const fullText = detections.length > 0 ? detections[0].description : '';

    const parsedData = extractData(fullText);
    res.status(200).json({ text: fullText, parsedData });
  } catch (error) {
    console.error('Errore OCR:', error);
    res.status(500).json({ error: 'Errore durante il riconoscimento OCR' });
  }
}

function extractData(text) {
  const serialMatch = text.match(/SERIAL(?:NO)?[:\s]+([A-Za-z0-9]+)/i);
  const modelMatch = text.match(/MODEL[:\s]+([A-Za-z0-9\-]+)/i);
  const voltageMatch = text.match(/VOLTAGE\s+\S*\s+(\d+)/i);
  const pressureMatch = text.match(/HPPS\s+(\d+)/i);
  const temperatureMatch = text.match(/(\d+)[°\s]*C/i);

  return {
    serial: serialMatch ? serialMatch[1] : '',
    model: modelMatch ? modelMatch[1] : '',
    voltage: voltageMatch ? voltageMatch[1] : '',
    pressure: pressureMatch ? pressureMatch[1] : '',
    temperature: temperatureMatch ? temperatureMatch[1] : '',
  };
}
