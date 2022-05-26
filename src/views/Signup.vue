<template>
  <div>
    <v-app-bar color="indigo darken-4" dark fixed>
      <v-toolbar-title class="text-center">Signup</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-img
        class="mx-auto"
        src="../../public/img/logo.png"
        width="300"
      ></v-img>
      <template>
        <v-form ref="form" lazy-validation>
          <!-- <avatar-input v-model="form.avatar"></avatar-input> -->
          <!-- <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Full Name"
            required
            outlined
          ></v-text-field> -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            outlined
          ></v-text-field>

          <v-btn
            color="indigo darken-4"
            class="mr-4"
            @click="signup"
            dark
            block
            large
          >
            Sign Up
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
// import AvatarInput from '../components/AvatarInput.vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  // components: { AvatarInput },
  name: 'signup',
  data() {
    return {
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
      form: {
        avatar: null,
      },
    }
  },
  methods: {
    signup() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    googleSignin() {},
  },
}
</script>
