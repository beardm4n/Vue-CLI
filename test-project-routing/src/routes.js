import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error'

// создаем базовую структуру экземпляра VueRouter нам необъодимо его зарегестрировать. для этого мы переходим в main.js
export default new VueRouter({
   //набор определенных роутов, которое будет содержать приложение
   routes: [
       //в массиве будем перечислять объекты. где каждый объект будет явл. своим роутом
       {
          //описываем как минимум два поля: path - передаем некую строку, за какой путь отвечает определенный компонент
          path: '', //localhost:8080
          component: Home,
          name: 'home'
       },
       {
         //описываем как минимум два поля: path - передаем некую строку, за какой путь отвечает определенный компонент
         path: '/cars', //localhost:8080/cars
         component: Cars
       },
      {
         path: '/car/:id',
         component: Car,
         //как сделать вложенный роут. для этого у каждого из объекта, который представляет нам роут, существует спец. поле - children
         children: [
            {
               path: 'full', //http://localhost:8080/car/:id/full
               component: CarFull,
               //во Vue у каждого роута есть спец. свойство, кот. позволяет делать навигацию к определенному имени, соответственно, каждому роуту можно задать свое имя
               name: 'carFull',
               // ЗАЩИТА РОУТОВ
               beforeEnter (to, from, next) {
                  console.log('beforeEnter')
                  // if (false) {
                  //    next(true)
                  // } else {
                  //    next(false)
                  // }
                  next()
               }
            }
         ]
      },
       // РЕДИРЕКТ
      {
         path: '/none',
         //redirect: '/cars' через строку
         //или через именованный роут:
         redirect: {
            name: 'home'
         }
      },
      {
         //спец. значок * - значает, что для всех роутов, которые не определены, будет вызываться дааный роут
         path: '*',
         component: ErrorCmp
      }
   ],
   //чтобы убрать значение хэша /#/ в строке пути. это переменная mode, если укзать значение history браузер будет сохранять историю посещения ссылок
   mode: 'history',
   scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      }

      if (to.hash) {
         return { selector: to.hash }
      }

      return {
         x: 0,
         y: 0
      }
   }
})