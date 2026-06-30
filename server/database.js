import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create the Leads table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS Leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT NOT NULL,
        mobileNumber TEXT NOT NULL,
        loanType TEXT NOT NULL,
        city TEXT NOT NULL,
        submittedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        userIP TEXT,
        userAgent TEXT,
        status TEXT DEFAULT 'New Lead'
      )
    `, (err) => {
      if (err) {
        console.error('Error creating Leads table', err.message);
      } else {
        console.log('Leads table ready.');
      }
    });
  }
});

export default db;
