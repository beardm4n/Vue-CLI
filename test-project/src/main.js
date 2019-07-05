import Vue from 'vue'
//подключение сторонней библиотеки - валидация
import Vuelidate from 'vuelidate'
import App from './App.vue'

//подключение сторонней библиотеки при помощи метода use
Vue.use(Vuelidate)

new Vue({
  render: h => h(App)

}).$mount('#app')


