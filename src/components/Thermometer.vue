<template>
  <div class='thermometer' id='thermometer'>
    <div class="hour active">
      <div>Now</div>
      <div class='temp'>{{currentTemp}}&deg;F</div>
    </div>
    <div class='hour' v-for="forecast in forecast">
      <div>{{forecast.dt_txt}}</div> <!-- todo: format -->
      <div class='temp'>{{forecast.main.temp}}&deg;F</div> <!-- todo: format -->
    </div>
  </div>
</template>

<script>
  import WeatherAPI from "../services/api/WeatherAPI";

  export default {
    name: "Thermometer",
    props: {
      weather: Object,
      id: Number
    },
    data() {
      return {
        forecast: []
      }
    },
    created() {
      WeatherAPI.getForecastByCity(this.id)
        .then(data => {
          for ( var i=0 ; i < 2 ; i++ ){ // the API returns in 3-hour chunks so a 2 will bring us to a 6 hour forecast
            this.forecast.push(data.list[i]);
          }
        })
        .catch(error => console.log(error));
    },
    computed: {
      currentTemp: function () {
        return Math.round(this.weather.main.temp);
      },
      currentHour: function (timestamp) {
        return this.formatTime(timestamp);
      }
    },
    methods: {
      formatTime: function (timestamp) {
        let time = new Date(timestamp);
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      }
    }
  }
</script>

<style lang="scss">
  .thermometer {
    border: 1px solid black;
    border-radius: 3.5em;
    background: white;
    display: flex;
    align-items: center;
  }
  .hour {
    flex-grow: 1;
    height: 100%;
    -webkit-transition: ease-in-out 1s;
    transition: ease-in-out 1s;
    text-align: center;
    &.active {
       border-radius: 3.5em;
      background: rgb(21,167,158);
      background: linear-gradient(54deg, rgba(21,167,158,1) 0%, rgba(0,214,202,1) 50%, rgba(111,222,215,1) 100%);
     }
    }
    .hour:first-of-type{
      margin-left: 3.5em;
    }
    .hour:last-of-type{
      margin-right: 3.5em;
    }
    .temp {
      font-size: 30px;
    }

</style>
