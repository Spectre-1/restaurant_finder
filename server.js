require('dotenv').config({ path: './secret/secret.env' });
const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

app.get('/', (req, res) => {
  const yelpApiKey = process.env.YELP_API_KEY;

  axios.get('https://api.yelp.com/v3/transactions/delivery/search', {
    params: {
      location: 'San Francisco',
      open_now: true, // this parameter only exists in the Transaction Search Endpoint and not in the Business Search Endpoint
      limit: 10
    },
    headers: {
      Authorization: `Bearer ${yelpApiKey}`
    }
  })
  .then(response => {
    // Convert JSON data to string for simple display
    // You can modify this part depending on how you want to format the data
    res.send(JSON.stringify(response.data, null, 2));
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('An error occurred while retrieving data from Yelp API');
  });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
