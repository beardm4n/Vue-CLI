<template>
   <div>
      <button
              class="on"
              :class="{'active': value}"
              @click="onChange(true)"
      >On</button>
      <button
              class="off"
              :class="{'active': !value}"
              @click="onChange(false)"
      >Off</button>
   </div>
</template>

<script>
   export default {
      name: "Onoff",
      props: ['value'],
      methods: {
         onChange (newValue) {
            this.$emit('input', newValue)
         }
      }
   }
</script>

<style scoped>
   button {
      border: none;
      padding: 5px 15px;
      cursor: pointer;
      margin-right: 20px;
      outline: none;
   }
   
   button:active {
      background: green;
      color: #fff;
   }
   
   .on.active {
      background: green;
      color: #fff;
   }
   
   .off.active {
      background: red;
      color: #fff;
   }
</style>