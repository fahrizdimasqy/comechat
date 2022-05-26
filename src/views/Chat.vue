<template>
  <div>
    <v-toolbar color="indigo darken-4" dark>
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="text-center">Chat</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <div class="d-flex mb-3">
        <v-avatar color="primary" size="56"></v-avatar>
        <v-card class="align-end" color="indigo">
          <v-container>
            <p>Hello I'm Fahriz Dimasqy</p>
          </v-container>
        </v-card>
      </div>
      <div class="d-flex align-end">
        <v-avatar color="primary" size="56"></v-avatar>
        <v-card class="align-center">
          <v-container>
            <p>Hello I'm Fahriz Dimasqy</p>
          </v-container>
        </v-card>
      </div>
    </v-container>
    <v-container>
      <div class="d-flex">
        <v-text-field
          label="Send your Message"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-btn depressed color="primary" class="mt-3">Send</v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'chat',
}
</script>
