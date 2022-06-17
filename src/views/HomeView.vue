<template>
  <div class="container">
    <!--<HelloWorld msg="Tandem - Find your companion"/>-->
    <event-calendar-component />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PeopleViewComponent from "@/components/PeopleViewComponent.vue";
import EventCalendatComponent from "@/components/EventCalendarComponent.vue";
import CreateEventComponentVue from "@/components/CreateEventComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    "peopleview-component": PeopleViewComponent,
    "event-calendar-component": EventCalendatComponent,
    "create-event-component": CreateEventComponentVue,
  },
};
</script>
