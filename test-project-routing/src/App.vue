<template>
  <div id="container">
<!--  подключим меню навигации при помощи bootstrap  -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
<!--          <li class="nav-item">-->
<!-- обернем ссылки "а" таким образом, чтобы они не обновляли страницу при переходе по ним. во Vue сущесвтует компонент, который отвечает за ссылки - router-link , мы заменяем им ссылки "а" -->
<!-- далее, при исопльзование router-link нам необходимо заменить href на to. Атрибут to указывает на какую страницу и rout ведет соответственная ссылка -->
<!-- мы можем забайндить данные ссылки, помня, что значения атрибута мы должны записывать в строковом формате -->
<!--            <router-link class="nav-link" :to="'/'">Home</router-link>-->
<!--          </li>-->

<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" :to="'/cars'">Cars</router-link>-->
<!--          </li>-->


           <!--  Обозначение активной ссылки VUE  -->
           <!--  используем vue-router, чтобы определить текущий rout и добавить нужный класс на ссылку  -->
           <!--         вместо тега li мы можем использовать тег router-link. у него есть спец. параметр - tag, и в него мы можем передать название тега, который мы будем исопльзовать в качестве данного компонента, который заменит его-->
           <!--  используем параметр router-link'а - exact, для того, чтобы сказать VUE что нам нужно точное совпадение пути в строке -->
          <router-link tag="li" class="nav-item" :to="'/'" exact active-class="active">
             <a class="nav-link">Home</a>
          </router-link>

          <router-link tag="li" class="nav-item" :to="'/cars'" exact active-class="active">
             <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>

     <!--  создадим спец. тег, который говорит куда нужно рендерить наш определенный роут, который описали в routes.js -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>
