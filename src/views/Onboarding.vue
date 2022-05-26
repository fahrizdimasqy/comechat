<template>
  <div v-if="show" class="indigo darken-4 text-center" style="height: 100%;">
    <v-container>
      <img
        src="../../public/img/undraw_typing_re_d4sq.svg"
        width="340"
        alt=""
        srcset=""
        class="mt-15 mx-auto text-center"
      />
      <h1 class="white--text text-center">
        Let's Chat
      </h1>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'onboarding',
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    this.showToggle()
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 3000)
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>
