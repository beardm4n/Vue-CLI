<template>
   <div>
<!--      1й способ -->
      <h4>Car name: {{ $route.query.name }}</h4>
      <h5>Car year: {{ year }}</h5>
   </div>
</template>

<script>
   export default {
      //2й способ
      computed: {
         year () {
            return this.$route.query.year
         }
      }
   }
</script>

<style scoped>

</style>