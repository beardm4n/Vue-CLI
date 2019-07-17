import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false;
//для того, чтобы исопльзовать плагин VueResource мы должны обратиться к глобальной переменной Vue и при помощи его метода use добавить данный плагин
Vue.use(VueResource)

new Vue({
  render: h => h(App),
}).$mount('#app');


//установим библотеку vue-resource, для создание запросов и боработки ответов с использованием XMLHttpRequest или JSONP
//устновим сервер для разоработки. для этого используем локальный сервер - JSON-сервер. устанавливаем глобально (-g) и для локальной разработке утсанавливаем (--save-dev)
//в package.json пропишем команду для запуска json-сервера
