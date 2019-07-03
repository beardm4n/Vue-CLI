import Vue from 'vue'
import App from './App.vue'

// шина событий
export const eventEmitter = new Vue()

// глобальное подключение компонента
// import Car from './Car.vue'
//
// Vue.component('app-car', Car)

new Vue({
  //ES6
  render: h => h(App)

  /*render: function (h) {
      return h(App)
    }*/
}).$mount('#app')


