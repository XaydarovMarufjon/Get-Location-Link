const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');
const NodeGeocoder = require('node-geocoder')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const options = {
  provider: 'openstreetmap'
};

const geocoder = NodeGeocoder(options);

app.get('/', (req, res) => {
  const ip = requestIp.getClientIp(req);
  // console.log(ip);
  res.send(ip)
  // geocoder.geocode(ip)
  //   .then((result) => {
  //     const { latitude, longitude } = result[0];
  //     res.send(`Your current location is: ${latitude}, ${longitude}`);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).send('Error getting current location');
  //   });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
