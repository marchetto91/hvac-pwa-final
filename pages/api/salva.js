import db from '../../db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { serial, model, voltage, pressure, temperature } = req.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO rilevamenti (serial, model, voltage, pressure, temperature)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(serial, model, voltage, pressure, temperature);

    res.status(200).json({ message: 'Salvataggio completato' });
  } catch (err) {
    res.status(500).json({ message: 'Errore nel salvataggio', error: err.message });
  }
}
