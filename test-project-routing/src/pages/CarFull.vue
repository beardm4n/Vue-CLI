<template>
   <div>
<!--     ПЕРЕДАЧА ПАРАМЕТРОВ 1й способ -->
      <h4>Car name: {{ $route.query.name }}</h4>
      <h5>Car year: {{ year }}</h5>
<!--ХЭШ и СКРОЛЛ-->
      <div class="scroll"></div>

      <h6 id="scroll">Hello from the bottom</h6>

      <div class="scroll"></div>

   </div>
</template>

<script>
   export default {
      // ПЕРЕДАЧА ПАРАМЕТРОВ 2й способ
      computed: {
         year () {
            return this.$route.query.year
         }
      },
      beforeRouteEnter (to, fromR, next) {
         console.log('beforeRouteEnter')
         next(true)
      }
   }
</script>

<style scoped>
   .scroll {
      width: 100px;
      height: 1000px;
      background: #ccc;
   }
</style>