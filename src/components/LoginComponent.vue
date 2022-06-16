<template>
    <form @submit.prevent="login(username, password)">
        <input v-model="username" placeholder="username" required>
        <input v-model="password" placeholder="password" type="password" required>

        <input type="submit" class="waves-effect waves-light btn" value="Login">
    </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import Person from "@/types/Person";

export default defineComponent({
    name: "",
    setup() {
        const toast = useToast();
        return { toast };
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login(username: string, password: string) {
            if (this.username === undefined || this.username === "") {
                this.toast.error("Username is not set");
                return
            }
            try {
                this.$store.dispatch("getPersons", {
                    username: this.username,
                    password: this.password
                });
                let persons: Person[] = this.$store.persons;
                if (persons.find(p => p.username == username && p.password == password) != undefined){
                    this.$router.push("/");
                }
                else {
                    this.toast.error("Login failed");
                return
                }
                
            } catch (err) {

            }
        }
    }
})
</script>