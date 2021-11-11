var request = require("request");

exports.loadData = function () {
  
    const BTCUSD = new Promise((resolve, reject) => {
      request(
        "https://www.bitstamp.net/api/v2/ticker/btcusd/",
        function (err, body, data) {
          if (err) {
            rejcet(err);
          } else {
            data = JSON.parse(data);
            console.log(data);
            resolve(data);
          }
        }
      );
    });
    const ETHUSD = new Promise((resolve, reject) => {
      request(
        "https://www.bitstamp.net/api/v2/ticker/ethusd/",
        function (err, body, data) {
          if (err) {
            rejcet(err);
          } else {
            data = JSON.parse(data);
            resolve(data);
          }
        }
      );
    });
    const LTCUSD = new Promise((resolve, reject) => {
      request(
        "https://www.bitstamp.net/api/v2/ticker/ltcusd/",
        function (err, body, data) {
          if (err) {
            rejcet(err);
          } else {
            data = JSON.parse(data);
            resolve(data);
          }
        }
      );
    });
   
    return Promise.all([BTCUSD, ETHUSD, LTCUSD])
      .then((values) => {
        console.log("values", values);
        const coinObject = {
          BTCUSD: values[0],
          ETHUSD: values[1],
          LTCUSD: values[2],
        };
        console.log("coinObject", coinObject);
        return coinObject;
      })
      .catch((error) => {
        console.error(error.message);
      }); 
 
};
