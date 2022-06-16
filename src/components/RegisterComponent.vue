<template>
    <div id="app">
        <h1>Register</h1>
        <form @submit.prevent="login(firstname, lastname, blind, interests)">
            <input v-model="firstname" placeholder="username">
            <input v-model="lastname" placeholder="password" type="password">
            
            <p>
                <label>
                    <input type="checkbox" class="filled-in" value="Sports" v-model="interests" />
                    <span>Sports</span>
                </label>
            </p>

            <input type="submit" class="waves-effect waves-light btn" value="Let's go">

        </form>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

export default defineComponent({
    name: "RegisterComponent",

    setup() {
        const toast = useToast();
        return { toast };
    },

    data() {
        return {
            firstname: "",
            lastname: "",
            blind: false,
            test: false,
            interests: [] as string[]
        }
    },

    methods: {

        login(firstname: string, lastname: string, blind: boolean, interests: string[]): void {
            
            if (this.firstname === undefined || this.firstname === "") {
                this.toast.error("fistName is not set");
                return
            }
            try {
                this.$store.dispatch("addPerson", { 
                    firstname: this.firstname,
                    lastname: this.lastname,
                    interests: this.interests,
                    blind: this.blind,
                    id: null })
                this.$router.push("/");
            } catch (err) {

            }
        },
    }

});
</script>
