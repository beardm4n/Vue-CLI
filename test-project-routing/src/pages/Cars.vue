<template>
   <div>
      <h1>Cars page</h1>
<!--Динамические роут VUE JS-->
<!--список всех машин-->
      <ul>
         <router-link
                 tag="li"
                 v-for="car in 5"
                 :key="car"
                 :to="'/car/' + car"
         >
            <a>Car {{ car }}</a>
         </router-link>
      </ul>
   </div>
</template>

<script>
   export default {

   }
</script>

<style scoped>

</style>