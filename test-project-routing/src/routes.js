import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'

// создаем базовую структуру экземпляра VueRouter нам необъодимо его зарегестрировать. для этого мы переходим в main.js
export default new VueRouter({
   //набор определенных роутов, которое будет содержать приложение
   routes: [
       //в массиве будем перечислять объекты. где каждый объект будет явл. своим роутом
       {
          //описываем как минимум два поля: path - передаем некую строку, за какой путь отвечает определенный компонент
          path: '', //localhost:8080
          component: Home
       },
       {
         //описываем как минимум два поля: path - передаем некую строку, за какой путь отвечает определенный компонент
         path: '/cars', //localhost:8080/cars
         component: Cars
       },
      {
         path: '/car/:id',
         component: Car
      }
   ],
   //чтобы убрать значение хэша /#/ в строке пути. это переменная mode, если укзать значение history браузер будет сохранять историю посещения ссылок
   mode: 'history'
})