

export function doRequest(requestType, url) {
  console.log(url);
  const apiData = {
    method: requestType,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "892d32a9ba54f35f38773b0889e86ecd",
    },
  }
  fetch(url, apiData)
    .then(
      (result) => {
        console.log('result');
        return {
          error: undefined,
          result: result,
        };
      },
      (error) => {
        console.log('error');
        return {
          error: error,
          result: undefined,
        };
      }
    )
  console.log('should not make it here--------------');
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
      "temp": 302.81,
      "pressure": 1019,
      "humidity": 58,
      "temp_min": 301.15,
      "temp_max": 304.15
  },
  "visibility": 16093,
  "wind": {
      "speed": 2.1,
      "deg": 180
  },
  "clouds": {
      "all": 1
  },
  "dt": 1533521700,
  "sys": {
      "type": 1,
      "id": 2557,
      "message": 0.0038,
      "country": "US",
      "sunrise": 1533556361,
      "sunset": 1533604832
  },
  "id": 4671654,
  "name": "Austin",
  "cod": 200
};
