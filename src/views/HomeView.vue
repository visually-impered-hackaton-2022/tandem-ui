<template>
  <div class="container">
    <!--<HelloWorld msg="Tandem - Find your companion"/>-->
    
    <div id="tab1" class="col s12"><event-calendar-component /></div>
    <div id="tab2" class="col s12"><create-event-component /></div>
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
