<template>
  <div class="" style="height: 100%;">
    <v-toolbar color="indigo darken-4" dark>
      <v-toolbar-title class="text-center">Login</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-img
        class="mx-auto"
        src="../../public/img/logo.png"
        width="300"
      ></v-img>
      <template>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            outlined
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="indigo darken-4"
            class="mr-4"
            @click="signin"
            dark
            block
            large
          >
            Login
          </v-btn>

          <v-btn
            dark
            block
            outlined
            large
            class="mt-4"
            color="grey"
            @click="googleSignin"
          >
            Login By Google
            <v-icon class="ms-2">
              mdi-google
            </v-icon>
          </v-btn>
          <div class="text-center mt-3">
            <p>
              Don't have account?
              <a href="/register"><b>Register</b></a>
            </p>
          </div>
        </v-form>
      </template>
    </v-container>
  </div>
</template>
<script>
// import * as firebase from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
// import firebaseui from 'firebaseui'
// import { config } from '../firebaseConfig'
// import {reft} from 'vue'

export default {
  name: 'login',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length > 6) || 'Name must be less than 6 characters',
    ],
  }),
  methods: {
    googleSignin() {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.log(error)
          this.$router.push({ name: '/' })
        })
    },
    signin() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    validate() {},
  },
  //   mounted() {
  //     var uiConfig = {
  //       signInSuccessURL: '/home',
  //       signInOptions=[
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID,

  //       ]
  //     }
  //   },
}
</script>
