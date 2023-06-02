import { Router } from "vue-router";

const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
  path: "/world",
  component: Module,
  children: [
    {
      path: "",
      component: Home
    }
  ]
};

export default (router: Router) => {  router.addRoute(moduleRoute); }



