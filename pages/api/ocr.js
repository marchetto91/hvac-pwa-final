mport fs from 'fs';
import { v1p3beta1 as vision } from '@google-cloud/vision';
import { GoogleAuth } from 'google-auth-library';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const form = new formidable.IncomingForm({
    uploadDir: './public/uploads',
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Errore parsing file' });
    }

    const filePath = files.file.filepath;

    try {
      const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
      const auth = new GoogleAuth({ credentials });
      const client = new vision.ImageAnnotatorClient({ auth });

      const [result] = await client.textDetection(filePath);
      const text = result.fullTextAnnotation.text;

      const parsedData = {
        serial: (text.match(/SERIAL(?:NO| NUMBER)?[:\s]*([A-Z0-9\-]+)/i) || [])[1] || '',
        model: (text.match(/MODEL[:\s]*([A-Z0-9\-\/]+)/i) || [])[1] || '',
        voltage: (text.match(/VOLTAGE(?:~N_V)?[:\s]*([0-9]{3})/i) || [])[1] || '',
        pressure: (text.match(/HPPS\s*([0-9]+)\s*MPa/i) || [])[1] || '',
        temperature: '',
        rawText: text
      };

      res.status(200).json({ parsedData });
    } catch (error) {
      console.error('Errore Vision API:', error);
      res.status(500).json({ error: 'Errore OCR AI' });
    } finally {
      fs.unlinkSync(filePath);
    }
  });
}
