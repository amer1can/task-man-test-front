<template>
  <div class="about mt-10">
    <div class="header d-flex align-center justify-center my-3">
      <router-link to="/">
        <v-btn
            class="mx-3"
            size="small"
            icon="mdi-arrow-left"
        ></v-btn>
      </router-link>
      <h1 class="text-center text-amber-accent-1">About</h1>
    </div>
    <h2 class="text-green-accent-2">Используемый стек:</h2>
    <ul class="stack-list mx-15">
      <li>Языки: Java Script / Type Script</li>
      <li>Бэк-енд: Node / Nestjs</li>
      <li>Фронт-енд: Vue3 + Vuetify / Vuex / Vue Router</li>
      <li>База данных: Mongoose(Typegoose)</li>
      <li>Test API: Postman</li>
      <li>Дополнительно: Github Actions / Docker</li>
    </ul>
  </div>
</template>

<style>
.about {
  margin: 0 auto;
  max-width: 800px;
}
.about li {
  color: blueviolet;
}
a {
  color: antiquewhite;
  text-decoration: none;
}
</style>
