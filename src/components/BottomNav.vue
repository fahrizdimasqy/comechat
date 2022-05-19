<template>
  <v-bottom-navigation :value="value" color="primary" grow>
    <v-btn class="bg-custom-primary" to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn class="bg-custom-primary" to="statistic">
      <v-icon>mdi-chart-multiple</v-icon>
    </v-btn>
    <v-btn class="bg-custom-primary" to="/topscore">
      <v-icon>mdi-scoreboard</v-icon>
    </v-btn>
    <v-btn class="bg-custom-primary" to="/team">
      <v-icon>mdi-alert-decagram</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'bottomnav',
  data: () => ({ value: 1 }),
}
</script>
