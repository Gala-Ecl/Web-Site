import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from "@/components/home";
import Login from "@/components/login";
import PersonnalSpace from "@/components/personnal-space";
import Party from "@/components/party";
import Diner from "@/components/diner";
import Graduation from "@/components/graduation";
import Information from "@/components/information";
import Partners from "@/components/partners";
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
            path: "/party",
            name: "party",
            component: Party
        },
        {
            path: "/graduation",
            name: "graduation",
            component: Graduation
        },
        {
            path: "/information",
            name: "information",
            component: Information
        },
        {
            path: "/partners",
            name: "partners",
            component: Partners
        },
        {
            path: "/diner",
            name: "diner",
            component: Diner
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
