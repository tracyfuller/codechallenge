import axios from 'axios';

export default {
  getForecastByCity (cityID) {
    return axios.get("/forecast", {
      params: {
        id: cityID,
        units: 'imperial',
        APPID: 'd4500e62a32ef5492f2bbd9ba2cd05c3',
      }
    })
      .then(response => {
        return response.data;
      })
  },
  getWeatherByGroup (){
    return axios.get("/group", {
      params: {
        id: '5037649,4887398,4273837',
        units: 'imperial',
        APPID: 'd4500e62a32ef5492f2bbd9ba2cd05c3',
      }
    })
      .then(response => {
        return response.data;
      })
  }

}

// mpls id == 5037649
// chicago == 4887398
// kansas city == 4273837

