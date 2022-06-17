import { createStore } from "vuex";
import newRequest from "@/api";
import { HTTP_VERBS } from "@/types/Common";
import Person from "@/types/Person";
import { useToast } from "vue-toastification";
import { stat } from "fs";
import Login from "@/types/Login";
import Event from "@/types/Event";

const toast = useToast();

/**
 * central state of web app
 */
interface APPRootState {
  version: string;
  backendUrl: string;
  persons : Person[];
  error: string;
  login: Login;
  events: Event[]
}

const store = createStore<APPRootState>({
  state: {
    version: "1.0.0", // a simple property
    backendUrl: "https://tandem-quarkus-tandem.apps.cluster-jpv4f.jpv4f.sandbox1420.opentlc.com/",
    persons: [] as Person[],
    error: "",
    login: {} as Login,
    events: [] as Event[],
  },
  mutations: {
    addEvent(state, event: Event) {
      state.events.push(event);
    },
    updateLogin(state, login: Login) {
      state.login = login;
    },
    updateBackendUrl(state, backendUrl) {
      state.backendUrl = backendUrl;
    },
    updatePersons(state, data: Person[]) {
      state.persons = data;
    },
    updateError(state, err: string) {
      state.error = err;
      if (err != "") {
        toast.error(err);
      }
    },
    sendToastSuccess(state,msg:string){
      if (state.error === ""){
        toast.success(msg);
      }
      
    }
  },
  actions: {
    getPersons({ commit }): any {
      store.commit("updateError", "");
      newRequest(
        HTTP_VERBS.GET,
        this.state.backendUrl + "persons",
        new Headers({
          "Content-Type": "application/json",
        }),
        {}, //there is no query parameters
        {} //no data for get
      ).catch((error: any) => {
        const err = `Error at sending request !`;
        store.commit("updateError", err);
      }).then((result:any) => {
        //let dmesg = "saved successfully";
        store.commit("updatePersons",result);
      });;
    },
    addPerson({ commit },{username,password,blind,interests,id}): any {
      store.commit("updateError", "");
      let person:Person = {
        username:username,
        password:password,
        blind:blind,
        interests: interests,
        id:id};
      const json = JSON.stringify(person);
      console.log(json);
      newRequest(
        HTTP_VERBS.POST,
        this.state.backendUrl + "persons",
        new Headers({
          "Content-Type": "application/json",
        }),
        {}, //there is no query parameters
        json
      ).catch((error: any) => {
        const err = `Error at sending request !`;
        store.commit("updateError", err);
      }).then((result:any) => {
        let dmesg = "Registered successfully";
        store.commit("sendToastSuccess",dmesg);
      });

    },
    addEvent({ commit },{name,date,interest}): any {
      store.commit("updateError", "");
      let event:Event = {
        name: name,
        date: date,
        interest: interest,
        participants: []
      };
      const json = JSON.stringify(event);
      console.log(json);
      newRequest(
        HTTP_VERBS.POST,
        this.state.backendUrl + "events",
        new Headers({
          "Content-Type": "application/json",
        }),
        {}, //there is no query parameters
        json
      ).catch((error: any) => {
        const err = `Error at sending request !`;
        store.commit("updateError", err);
      }).then((result:any) => {
        let dmesg = "Event saved successfully";
        store.commit("sendToastSuccess",dmesg);
      });

    }
  }, //end of actions
}); //end of store

export default store;
