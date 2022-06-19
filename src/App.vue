<template>
    <app-header/>

  <div class="container">
    <router-view />
  </div>

  <app-footer />
</template>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponentVue from "@/components/HeaderComponent.vue";
import Login from "./types/Login";
import { mapState } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapState({
      login: 'login'
    })

  },
  components: {
    "app-footer": FooterComponent,
    "app-header": HeaderComponentVue
  },
};
</script>
