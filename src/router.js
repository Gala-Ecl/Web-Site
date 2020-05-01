import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from "@/components/home";
import Login from "@/components/login";
import PersonnalSpace from "@/components/personnal-space";
import Party from "@/components/party";
// import Projects from "@/components/projects";
// import Contact from "@/components/contact";
// import Skilder from "@/components/skilder";
// import DigitalLab from "@/components/digital-lab";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/space-personnal",
            name: "space-personnal",
            component: PersonnalSpace,
            beforeEnter: (to, from, next) => {
                if (!store.state.isAuthenticated) next("/login")
                else next()
            }
        },
        {
            path: "/party",
            name: "party",
            component: Party
        },
    //     {
    //         path: "/projects/skilder",
    //         name: "skilder",
    //         component: Skilder
    //     },
    //     {
    //         path: "/projects/digital-lab",
    //         name: "digital-lab",
    //         component: DigitalLab
    //     },
    //     {
    //         path: "/contact",
    //         name: "contact",
    //         component: Contact
    //     }
    ]
});
