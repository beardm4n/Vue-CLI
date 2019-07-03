import Vue from 'vue'
import App from './App.vue'


Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', (value) => value.toUpperCase());

new Vue({
  //ES6
  render: h => h(App)

}).$mount('#app')


