<template>
    <select>
      <option v-for="city in cities" v-bind:value="city.id">{{city.name}}</option>
    </select>
</template>

<script>
    export default {
      name: "Dropdown",
      props: {cities: Array}
    }
</script>

<style scoped>

</style>
