<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <h2>Parent: {{ carYear}}</h2>

    <app-counter></app-counter>
    <app-car
            :carName="carName"
            :carYear="carYear"
            :changeFunc="changeNameToAudi"
            @nameChanged="carName = $event"
            @counterUpdated="counter = $event"
    ></app-car>
  </div>
</template>

<script>

  //локальное подключение компонента
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
