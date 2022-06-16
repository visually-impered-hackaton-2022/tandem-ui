<template>
  <login-component />
</template>


<script lang="ts">
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    "login-component": LoginComponent,
  },
};
</script>
