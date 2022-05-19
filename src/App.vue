<template>
  <v-app>
    <v-app-bar app class="custom-primary" Light>
      <div class="text-center mx-auto">
        <h1 class="text-primary">Football World</h1>
      </div>
    </v-app-bar>

    <v-main style="background-color: #ebf1f6;">
      <v-slide-y-transition>
        <router-view />
      </v-slide-y-transition>
    </v-main>
    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
import BottomNav from './components/BottomNav.vue'
export default {
  components: { BottomNav },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
@import './assets/css/style.css';
</style>
