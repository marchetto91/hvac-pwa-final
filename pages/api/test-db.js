import db from '../../db';

export default function handler(req, res) {
  try {
    const rows = db.prepare('SELECT * FROM rilevamenti').all();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

