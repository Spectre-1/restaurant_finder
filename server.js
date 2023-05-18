require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

const axios = require('axios');

const yelpApiKey = process.env.YELP_API_KEY;
// Access the Yelp API key from the environment variable
// Refer to info.env file for key

axios.get('https://api.yelp.com/v3/businesses/search', {
  params: {
    location: 'San Francisco',
    term: 'food',
    limit: 10
  },
  headers: {
    Authorization: `Bearer ${yelpApiKey}` // Use the yelpApiKey variable
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
