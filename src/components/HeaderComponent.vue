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
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {};
  },
});
</script>

<style scoped>

</style>
