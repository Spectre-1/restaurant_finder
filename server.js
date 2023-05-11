const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

const axios = require('axios');

axios.get('https://api.yelp.com/v3/businesses/search', {
  params: {
    location: 'San Francisco',
    term: 'food',
    limit: 10
  },
  headers: {
    Authorization: `Bearer ${YOUR_YELP_API_KEY}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
