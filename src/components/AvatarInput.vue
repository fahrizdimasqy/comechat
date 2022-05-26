<template>
  <div>
    <input type="file" accept="image/*" class="" ref="file" @change="change" />
    <v-avatar size="58" color="primary">
      <v-img :src="src" alt="avatar" max-height="150" max-width="250"></v-img>
    </v-avatar>

    <button @click="browse()">Browse</button>
  </div>
</template>
<script>
export default {
  props: {
    value: File,
  },
  data() {
    return {
      src: null,
    }
  },
  methods: {
    browse() {
      this.$refs.file.click()
    },
    change(e) {
      this.$emit('input', e.target.files[0])
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        this.src = e.target.result
      }
    },
  },
}
</script>
<style scoped>
.custom-hidden {
  visibility: hidden !important;
  /* display: hid; */
}
</style>
