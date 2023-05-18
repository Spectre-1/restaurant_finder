import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/endpoint') // Update with your endpoint
      .then((response) => {
        setData(response.data.businesses);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (!data) {
    return "Loading...";
  }

  return (
    <div style={{ overflowY: 'scroll', height: '500px' }}> {/* Adjust height as needed */}
      <h1>Restaurants</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.location.display_address.join(', ')}</p>
          <img src={item.image_url} alt={item.name} />
          <p>{item.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
