<template>
    <h2>Create Event</h2>
    <form @submit.prevent="createEvent(name, date, interest)">
        <input v-model="name" placeholder="Event name" required>
        <p>
            <label for="date-picker">Choose Date</label><br />
            <v-date-picker id="date-picker" v-model="date" />
        </p>
        <p>
            <label>Browser Select</label>
            <select class="browser-default" v-model="interest">
                <option value="" disabled selected>Choose your option</option>
                <option value="Sports">Sports</option>
                <option value="Grocery">Grocery</option>
                <option value="Travel">Travel</option>
            </select>
        </p>
        <input type="submit" class="waves-effect waves-light btn" value="Create Event">
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CreateEventComponent",
    data() {
        return {
            name: "",
            date: new Date(),
            interest: ""
        }
    },
    methods: {
        createEvent(name: string, date: Date, interest: string) {
            console.log(interest);
            console.log(date);
            console.log(name);
        }
    }
});
</script>
