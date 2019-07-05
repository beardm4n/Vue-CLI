<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
                type="email"
                id="email"
                class="form-control"
                @blur="$v.email.$touch()"
                v-model="email"
        >
      </div>
    </form>
  </div>
</template>


<script>
  //выбираем валидатор
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: ''
      }
    },
    //после того как глобально подключили валидацию, у нас доступно поле validators
    //в каждом инстансе
    validations: {
      //ключи полей, которые должны быть валидированы
      email: {
        //здесь указываются те валидаторы, которые необходим использовать для валидации этого поля
        //ключ должен совпадать с название валидатора
        required, // в ES6 существует свотйство, если ключ и значение совпадают можно просто оставить required без значения в старом стандате надо было required: required
        email
      }
    }
  }
</script>

<style scoped>

</style>
