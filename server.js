require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4545;

// API endpoint to fetch exchange rates (server-side)
app.get('/api/rates', async (req, res) => {
  try {
    const apiKey = process.env.EXCHANGE_RATES_API_KEY;
    const baseUrl = process.env.EXCHANGE_RATES_BASE_URL || 'http://api.exchangeratesapi.io/v1/latest?access_key=';
    const url = `${baseUrl}${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Check if API returned an error
    if (data.error) {
      return res.status(400).json({ error: data.error.info || 'API error occurred' });
    }
    
    // Ensure rates object exists
    if (!data.rates) {
      return res.status(500).json({ error: 'No rates data received from API' });
    }
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

// Serve static files
app.use(express.static('.'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});