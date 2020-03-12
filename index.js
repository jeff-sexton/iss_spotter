// index.js
// ISS Spotter
// https://web.compass.lighthouselabs.ca/days/w02d4/activities/895

const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(`IP is: `, ip);

// });


// fetchCoordsByIP('162.245.144.256', (error, data) => {
//   console.log(error);
//   console.log(data);

// });


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, flyOvers) => {
//   console.log(error);
//   console.log(flyOvers);

// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.forEach(elem => {
    const time = new Date(elem.risetime * 1000);
    console.log(`Next pass at ${time.toLocaleString('en-US', {timeZone: 'UTC', timeZoneName: 'short'})} for ${elem.duration} seconds!`);
    // How to print in PST?
  });
});