import Vue from 'vue'
import App from './App.vue'

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
