<template>
    <div id="app">
        <h1>Register</h1>
        <form @submit.prevent="register(username, password, blind, interests)">
            <input v-model="username" placeholder="Username" required>
            <input v-model="password" placeholder="Password" type="password" required>

            <h3>Your Interests</h3>
            <p>
                <label>
                    <input type="checkbox" class="filled-in" value="Sports" v-model="interests" />
                    <span>Sports</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" class="filled-in" value="Grocery" v-model="interests" />
                    <span>Grocery</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" class="filled-in" value="Travel" v-model="interests" />
                    <span>Travel</span>
                </label>
            </p>

            <h3>Disability</h3>
            <p>
                <label>
                    <input type="checkbox" class="filled-in"  v-model="blind" />
                    <span>Are you blind or visually impaired?</span>
                </label>
            </p>

            <input type="submit" class="waves-effect waves-light btn" value="Let's go">

        </form>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import { mapMutations } from 'vuex'

export default defineComponent({
    name: "RegisterComponent",

    setup() {
        const toast = useToast();
        return { toast };
    },

    data() {
        return {
            username: "",
            password: "",
            blind: false,
            test: false,
            interests: [] as string[]
          
        }
    },
  
    computed: {
            // a computed getter
            //computed properties are cached based on their reactive dependencies.          
    },
    methods: {

          blindResponse() :string {
                return this.blind ? "Yes": "No";               
        }  ,
        register(username: string, password: string, blind: boolean, interests: string[]): void {

            if (this.username === undefined || this.username === "") {
                this.toast.error("Username is not set");
                return
            }
            try {
                this.$store.dispatch("addPerson", {
                    username: this.username,
                    password: this.password,
                    interests: this.interests,
                    blind: this.blind,
                    id: null
                });
                this.setUser({username: username, password: password})
                this.$router.push("/");
            } catch (err) {

            }
        },
        ...mapMutations({
            setUser: 'updateLogin' // map `this.add()` to `this.$store.commit('increment')`
        })
    }

});
</script>
