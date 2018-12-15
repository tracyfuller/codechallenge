<template>
  <div class='thermometer' id='thermometer'>
    <div class='hour' v-for="message in message"  v-bind:class="{ active: message.active }">
      <div>{{message.text}}</div>
      <div class='temp'>{{message.temp}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Thermometer",
        props: {message: Array}
    }
</script>

<style lang="scss">
  .thermometer {
    border: 1px solid black;
    border-radius: 3.5em;
    background: rgb(21,167,158);
    background: linear-gradient(54deg, rgba(21,167,158,1) 0%, rgba(0,214,202,1) 50%, rgba(111,222,215,1) 100%);
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
       background: white;
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
