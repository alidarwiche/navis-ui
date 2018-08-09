

export function doRequest(requestType, url) {
  const config = {
    method: requestType,
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "892d32a9ba54f35f38773b0889e86ecd",
    },
  }

  return new Promise ((resolve, reject) => {
    fetch(url)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        console.log('Error:', JSON.stringify(error));
        reject(error);
      })


    // fetch(url, config)
    //   .then((response) => {
    //     console.log(response);
    //     if (isObjectEmpty(response)) {
    //       reject('test');
    //       // throw new Error('Something went wrong ...');
    //     } else {
    //       resolve(response);
    //     }
    //   })
    //   .catch(error => reject('test'));
  // })

    // fetch(url, config)
    //   .then(
    //     (response) => {
    //       console.log('response:', response);
    //       return {
    //         error: undefined,
    //         result: response,
    //       };
    //     },
    //     (error) => {
    //       console.log('error');
    //       return {
    //         error: error,
    //         result: undefined,
    //       };
    //     }
    //   )
    // console.log('should not make it here--------------');
    })
}

export function isObjectEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
}


export const dummyData = {
    "coord": {
        "lon": -97.74,
        "lat": 30.27
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 85.6,
        "pressure": 1017,
        "humidity": 58,
        "temp_min": 84.2,
        "temp_max": 87.8
    },
    "visibility": 16093,
    "wind": {
        "speed": 10.29,
        "deg": 150,
        "gust": 7.2
    },
    "clouds": {
        "all": 1
    },
    "dt": 1533606960,
    "sys": {
        "type": 1,
        "id": 2558,
        "message": 0.0035,
        "country": "US",
        "sunrise": 1533642797,
        "sunset": 1533691182
    },
    "id": 4671654,
    "name": "Austin",
    "cod": 200
};
