import axios from 'axios';

export default {
  getWeatherByCity (cityID) {
    return axios.get("/weather", {
      params: {
        id: cityID,
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
