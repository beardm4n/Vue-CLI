<template>
   <h1>Counter: {{ counter }}</h1>
</template>

<script>

   import {eventEmitter} from "../main";

   export default {
      name: "Counter",
      data () {
         return {
            counter: 0
         }
      },
      // для прослушки события используем жизненный цикл,
      // который означает, что компонент был создан, но не вложен
      // в DOM-дерево
      created() {
         eventEmitter.$on('counterUpdated', (num) => {
            this.counter += num
         })
      }
   }
</script>

<style scoped>

</style>