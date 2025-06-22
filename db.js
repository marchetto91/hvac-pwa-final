import Database from 'better-sqlite3';
import fs from 'fs';

const dbFile = './hvac-data.db';

// Sicurezza: il reset ora è disattivato definitivamente
// fs.existsSync(dbFile) && fs.unlinkSync(dbFile);

if (!fs.existsSync(dbFile)) {
  const db = new Database(dbFile);
  db.prepare(`
    CREATE TABLE IF NOT EXISTS rilevamenti (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      serial TEXT,
      model TEXT,
      voltage TEXT,
      pressure TEXT,
      temperature TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
  db.close();
}

const db = new Database(dbFile);
export default db;
