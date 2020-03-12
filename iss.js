/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org/?format=json`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipAddress = JSON.parse(body).ip;
    callback(null, ipAddress);
  });
};


const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coords. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const dataRec = JSON.parse(body);

    const coords = {
      latitude: dataRec.data.latitude,
      longitude: dataRec.data.longitude
    };

    callback(null, coords);


  });

};



module.exports = { fetchMyIP, fetchCoordsByIP };