<template>
  <h2>Login</h2>
  <form @submit.prevent="login(username, password)">
    <input v-model="username" placeholder="username" required />
    <input v-model="password" placeholder="password" type="password" required />

    <span>
      <input type="submit" class="waves-effect waves-light btn" value="Login" />
      Or <router-link to="/register">Register</router-link>
    </span>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import Person from "@/types/Person";

export default defineComponent({
  name: "LoginComponent",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(username: string, password: string) {
      if (this.username === undefined || this.username === "") {
        this.toast.error("Username is not set");
        return;
      }
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
         
    },
  },
});
</script>