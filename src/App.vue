<template>
  <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Blind - Tandem</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab">
          <router-link to="/">My Events</router-link>
        </li>
        <li class="tab">
          <router-link to="/create">Create Event</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <router-view />
  </div>

  <app-footer />
</template>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
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
  },
};
</script>
