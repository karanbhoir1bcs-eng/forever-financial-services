import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic endpoint to verify server is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Endpoint to submit a lead
app.post('/api/leads', (req, res) => {
  const { fullName, mobileNumber, loanType, city } = req.body;
  
  // Backend validation
  if (!fullName || !mobileNumber || !loanType || !city) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  
  if (mobileNumber.length !== 10 || !/^[0-9]{10}$/.test(mobileNumber)) {
    return res.status(400).json({ error: 'Mobile number must be exactly 10 digits.' });
  }

  // Get user IP and user agent (basic approach)
  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const userAgent = req.headers['user-agent'] || '';

  // Prevent duplicate submissions loosely by checking mobile number within recent time (optional, but requested: "Do not store duplicate records unnecessarily")
  const recentTime = new Date(Date.now() - 5 * 60 * 1000).toISOString(); // 5 minutes ago
  
  db.get(
    `SELECT id FROM Leads WHERE mobileNumber = ? AND submittedAt >= ?`,
    [mobileNumber, recentTime],
    (err, row) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Database error while checking duplicates.' });
      }
      
      if (row) {
        return res.status(429).json({ error: 'You have already submitted a request recently. Please wait before submitting again.' });
      }
      
      // Insert new lead
      const stmt = db.prepare(`
        INSERT INTO Leads (fullName, mobileNumber, loanType, city, userIP, userAgent)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      
      stmt.run([fullName, mobileNumber, loanType, city, userIP, userAgent], function(err) {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: 'Failed to save lead.' });
        }
        
        res.status(201).json({ 
          success: true, 
          message: 'Lead saved successfully',
          leadId: this.lastID
        });
      });
      stmt.finalize();
    }
  );
});

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
