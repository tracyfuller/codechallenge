<template>
    <select>
      <option @change="signalChange" v-for="city in cities" v-bind:value="city.id">{{city.name}}</option>
    </select>
</template>

<script>
    export default {
      name: "Dropdown",
      props: {cities: Array},
      methods: {
        signalChange(evt) {
          this.$emit("change", evt);
        },
      }
    }
</script>

<style scoped>

</style>
