
<template>
  <div id="app">
    <Dropdown v-model="selected" v-bind:cities="cities"></Dropdown>
    <div>{{currentHour}}</div>
    <div class="section" v-for="city in weatherArray">
      <Title v-bind:title="city.name"></Title>
      <Thermometer v-bind:weather="city" v-bind:id="city.id"></Thermometer>
    </div>
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
      cities: [
        {name: 'Minneapolis', id: '5037649'},
        {name: 'Chicago', id: '4887398'},
        {name: 'Kansas City', id: '4273837'}
      ],
      weatherArray: [],
    }
  },
  created () {
    WeatherAPI.getWeatherByGroup()
      .then(data => {
        this.weatherArray = data.list;
      })
      .catch(error => console.log(error))
  },
  computed: {
    currentHour: function () {
      let time = new Date();
      return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }
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
