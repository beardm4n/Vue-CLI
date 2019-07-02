<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <h2>Parent: {{ carYear}}</h2>

    <app-car
            :carName="carName"
            :carYear="carYear"
            @nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

<script>

  //локальное подключение компонента
import Car from './components/Car.vue'

export default {
  data () {
    return {
      carName: 'Ford',
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
