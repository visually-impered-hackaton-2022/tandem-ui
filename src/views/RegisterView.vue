<template>
  <register-component />
</template>


<script lang="ts">
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "LoginView",
  components: {
    "register-component": RegisterComponent,
  },
};
</script>
