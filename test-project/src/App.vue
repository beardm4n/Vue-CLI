<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
                type="email"
                id="email"
                class="form-control"
                :class="{'is-invalid': $v.email.$error}"
                @blur="$v.email.$touch()"
                v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
<!-- добавим сообщение о том, что данный email занят -->
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exist</div>
      </div>
<!--      поля пороля  -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
                type="password"
                id="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
      </div>
<!--подтверджение пароля-->
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input
                type="password"
                id="confirmPassword"
                class="form-control"
                :class="{'is-invalid': $v.confirmPassword.$error}"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Passwords should match</div>
      </div>
    </form>
  </div>
</template>


<script>
  //выбираем валидатор
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
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
        email,

        //для того, чтобы создать нужный валидатор (собственный) поределим свойсвто, оно будет являться функцией, которая принимает в себя новое значение данного контрола:
        uniqEmail: function (newEmail) {
          // данный валидатор явл. функцией, поэтому она должна возвращаться значение, которое будет говорить валидное ли сейчас наше состояние или нет
          // return newEmail !== 'test@mail.ru'

          // зададим условие, чтобы не было задержки при выполнении валидаторов required email, которые ждали пока джали когда сходим на сервер
          if (newEmail === '') return true

          // метод, если необходимо обратиться к серверу, получить какое-то значение и сравнить его правильно ли написан email, мы исопльзуем Promise (который явл. асинхронной конструкцией):
          return new Promise((resolve,reject) => {
            // сэмулируем какое то асинхронное событие например: сходим на сервер, якобы заберем из базы данных какие-то значения данного email'а и будем проверять
            // для этого заведем тайм-аут
            setTimeout(() => {
              const value = newEmail !== 'test@mail.ru'
              resolve(value)
            }, 3000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')

        //помимо строки можно передавать функцию, которая будет обозначать навание того поля или то поле, которое нам нужно проверять
        // пример: стрелочная функция, которая принимает в себя инстанс vue текущий. мы должны вернуть то поле, по которому нас стоит смтортеть идентичность
        // это нужно использовать если контролы, отвечающие за форму будут находится в отдельном объекте в data()
        /*sameAs: sameAs((vue) => {
          return vue.password
        })*/
      }
    }
  }
</script>

<style scoped>

</style>
