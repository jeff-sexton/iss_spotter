const {nextISSTimesForMyLocation} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(response => {
    response.forEach(elem => console.log(elem));

  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });