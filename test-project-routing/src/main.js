import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//для того, чтобы зарегистрировать экземпляр VueRouter импортируем константу router
import router from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   //регистрируем данный роутер, он регистрируется в экземпляре нашего приложения. т.к. значение и ключ совпадают то можно опустить значение роутера, блягодаря синтаксису ES6
   router
}).$mount('#app')
