<template>
  <div class="container">
    <HelloWorld msg="Tandem - Find your companion"/>
    <register-component/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PeopleViewComponent from "@/components/PeopleViewComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    "peopleview-component": PeopleViewComponent,
    "register-component": RegisterComponent
  },
};
</script>
