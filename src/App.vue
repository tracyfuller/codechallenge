
<template>
  <div id="app">
    <Title v-bind:title="title"></Title>
    <Dropdown @change="getWeather()" v-model="selected" v-bind:cities="cities"></Dropdown>
    <Thermometer v-bind:message="message"></Thermometer>
  </div>
</template>


<script>
import Dropdown from "./components/Dropdown";
import Thermometer from "./components/Thermometer";
import Title from "./components/Title";
import WeatherAPI from "./services/api/WeatherAPI";
export default {
  name: 'app',
  components: {Title, Thermometer, Dropdown},
  data () {
    return {
      selected: "",
      title: "Minneapolis",
      cities: [
        {name: 'Minneapolis', id: '5037649'},
        {name: 'Chicago', id: '4887398'},
        {name: 'Kansas City', id: '4273837'}
      ],
      message: [
        {
          text: 'now',
          temp: '31',
          active: true
        },
        {
          text: '+1 hour',
          temp: '32',
          active: false
        },
        {
          text: '+2 hour',
          temp: '33',
          active: false
        },
        {
          text: '+3 hour',
          temp: '34',
          active: false
        },
        {
          text: '+4 hour',
          temp: '30',
          active: false
        },
        {
          text: '+5 hour',
          temp: '29',
          active: false
        },
        {
          text: '+6 hour',
          temp: '25',
          active: false
        }]
    }
  },
  methods: {
    getWeather(value) {
      alert('changed: ' + value)
    },
  },
  created () {
    WeatherAPI.getWeatherByCity(5037649)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error))
  }
}
</script>

<style lang="scss">

  .container {
    display: grid;
    grid-template: auto 1fr / 1fr;
    grid-template-areas:
      'title'
      'thermometer';
  }
  .title {
    grid-area: title;
    text-align: center;
  }
  .thermometer {
    grid-area: thermometer;
  }
</style>
