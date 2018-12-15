import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

new Vue({
  el: '#app',
  render: h => h(App)
})
