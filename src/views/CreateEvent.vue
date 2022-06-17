<template>
  <create-event-component />
</template>


<script lang="ts">
import CreateEventComponent from "@/components/CreateEventComponent.vue";

export default {
  name: "AddPersonView",
  components: {
    "create-event-component": CreateEventComponent,
  },
};
</script>
