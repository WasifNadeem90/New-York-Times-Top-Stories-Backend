const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/top-stories', async (req, res) => {
  try {
    const apiKey = 'Ua5zZI41CL96IiK8INsh5haGVa82JBCH'; 
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching top stories' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
