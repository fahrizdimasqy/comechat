<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark v-if="isHome">
      <div class="text-center mx-auto">
        <h2 class="text-primary">Let's Chat</h2>
      </div>
    </v-app-bar>
    <div v-else></div>

    <v-main>
      <v-slide-y-transition>
        <router-view />
      </v-slide-y-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    isHome() {
      return this.$router === '/'
    },
  },
}
</script>
<style>
/* @import './assets/css/style.css'; */
</style>
