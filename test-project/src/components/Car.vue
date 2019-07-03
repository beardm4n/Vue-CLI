<template>
   <div class="car">
      <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
      <p>Year: {{ carYear }}</p>
      <button @click="changeName">Change name</button>
      <button @click="changeFunc()">Change from parent</button>
      <button @click="updateCounter">Update Counter</button>
   </div>
</template>

<script>
   import {eventEmitter} from "../main";

   export default {
      name: "Car",
      props: {
         carName: {
            type: String,
            default: 'Default name'
         },
         carYear: Number,
         changeFunc: Function
      },
      methods: {
         changeName() {
            this.carName = 'Mazda'
            // у каждого компонента во VUE есть спец. метод, который называется
            // $emit - он принимает в себя первым параметром название события,
            // которое будет прослушиваться, вторым - значения, которыми мы
            // хотим уведомить другие компоненты ⟱
            this.$emit('nameChanged', this.carName)
         },
         updateCounter() {
            // this.$emit('counterUpdated', this.counter + 1)
            eventEmitter.$emit('counterUpdated', 3)
         }
      },
      computed: {
         reverseName() {
            return this.carName.split('').reverse().join('')
         }
      }
   }
</script>

<style scoped>
   .car {
      border: 1px solid black;
   }

   .car h3 {
      margin-bottom: 5px;
   }
</style>