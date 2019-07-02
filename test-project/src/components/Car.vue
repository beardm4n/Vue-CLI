<template>
   <div class="car">
      <h3>Name: {{ carName }}</h3>
      <p>Year: {{ carYear }}</p>
   </div>
</template>

<script>
   export default {
      name: "Car",
      props: [
         'carName',
         'carYear'
      ],
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