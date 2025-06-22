import db from '../../db';

export default async function handler(req, res) {
  try {
    const stmt = db.prepare('SELECT * FROM rilevamenti ORDER BY created_at DESC');
    const rows = stmt.all();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
