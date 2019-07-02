<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <h2>Parent: {{ carYear}}</h2>

    <app-car v-for="car of 2" :carName="carName" :carYear="carYear"></app-car>
  </div>
</template>

<script>

  //локальное подключение компонента
import Car from './components/Car.vue'

export default {
  data () {
    return {
      carName: 'Ford from parent',
      carYear: 2018
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style>

</style>
